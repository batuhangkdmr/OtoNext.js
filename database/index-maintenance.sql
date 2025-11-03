-- ========================================
-- INDEX MAINTENANCE & OPTIMIZATION
-- Aylık bakım için çalıştırın
-- ========================================

USE [yone8215_yoneltic_y]
GO

PRINT '========================================';
PRINT 'INDEX MAINTENANCE BAŞLIYOR';
PRINT GETDATE();
PRINT '========================================';
GO

-- ========================================
-- 1. FRAGMENTATION RAPORU
-- ========================================

PRINT '';
PRINT '1. Fragmentation Analizi...';
GO

DECLARE @FragmentationReport TABLE (
    TableName NVARCHAR(128),
    IndexName NVARCHAR(128),
    FragmentationPercent DECIMAL(5,2),
    PageCount INT,
    Action NVARCHAR(50)
);

INSERT INTO @FragmentationReport
SELECT 
    OBJECT_NAME(ips.object_id) AS TableName,
    i.name AS IndexName,
    CAST(ips.avg_fragmentation_in_percent AS DECIMAL(5,2)) AS FragmentationPercent,
    ips.page_count AS PageCount,
    CASE 
        WHEN ips.avg_fragmentation_in_percent > 30 THEN 'REBUILD'
        WHEN ips.avg_fragmentation_in_percent > 10 THEN 'REORGANIZE'
        ELSE 'OK'
    END AS Action
FROM sys.dm_db_index_physical_stats(DB_ID(), NULL, NULL, NULL, 'DETAILED') ips
INNER JOIN sys.indexes i ON ips.object_id = i.object_id AND ips.index_id = i.index_id
WHERE ips.index_id > 0  -- Heap'leri atla
    AND ips.page_count > 100  -- Küçük index'leri atla
ORDER BY ips.avg_fragmentation_in_percent DESC;

SELECT * FROM @FragmentationReport;
GO

-- ========================================
-- 2. AUTO REBUILD/REORGANIZE
-- ========================================

PRINT '';
PRINT '2. Index Bakımı Yapılıyor...';
GO

DECLARE @TableName NVARCHAR(128);
DECLARE @IndexName NVARCHAR(128);
DECLARE @FragPercent DECIMAL(5,2);
DECLARE @SQL NVARCHAR(MAX);

DECLARE index_cursor CURSOR FOR
SELECT 
    OBJECT_NAME(ips.object_id),
    i.name,
    ips.avg_fragmentation_in_percent
FROM sys.dm_db_index_physical_stats(DB_ID(), NULL, NULL, NULL, 'DETAILED') ips
INNER JOIN sys.indexes i ON ips.object_id = i.object_id AND ips.index_id = i.index_id
WHERE ips.index_id > 0
    AND ips.page_count > 100
    AND ips.avg_fragmentation_in_percent > 10;

OPEN index_cursor;
FETCH NEXT FROM index_cursor INTO @TableName, @IndexName, @FragPercent;

WHILE @@FETCH_STATUS = 0
BEGIN
    IF @FragPercent > 30
    BEGIN
        -- REBUILD (>30% fragmentation)
        SET @SQL = 'ALTER INDEX ' + @IndexName + ' ON ' + @TableName + ' REBUILD WITH (ONLINE = OFF);';
        PRINT '  ↻ REBUILD: ' + @TableName + '.' + @IndexName + ' (' + CAST(@FragPercent AS VARCHAR) + '%)';
        EXEC sp_executesql @SQL;
    END
    ELSE IF @FragPercent > 10
    BEGIN
        -- REORGANIZE (10-30% fragmentation)
        SET @SQL = 'ALTER INDEX ' + @IndexName + ' ON ' + @TableName + ' REORGANIZE;';
        PRINT '  ⚙ REORGANIZE: ' + @TableName + '.' + @IndexName + ' (' + CAST(@FragPercent AS VARCHAR) + '%)';
        EXEC sp_executesql @SQL;
    END
    
    FETCH NEXT FROM index_cursor INTO @TableName, @IndexName, @FragPercent;
END

CLOSE index_cursor;
DEALLOCATE index_cursor;

PRINT '✓ Index bakımı tamamlandı';
GO

-- ========================================
-- 3. UPDATE STATISTICS
-- ========================================

PRINT '';
PRINT '3. İstatistikler Güncelleniyor...';
GO

UPDATE STATISTICS Products WITH FULLSCAN;
PRINT '  ✓ Products';

UPDATE STATISTICS Categories WITH FULLSCAN;
PRINT '  ✓ Categories';

UPDATE STATISTICS SliderImages WITH FULLSCAN;
PRINT '  ✓ SliderImages';

UPDATE STATISTICS Admins WITH FULLSCAN;
PRINT '  ✓ Admins';

GO

-- ========================================
-- 4. MISSING INDEX RECOMMENDATIONS
-- ========================================

PRINT '';
PRINT '4. Eksik Index Önerileri...';
GO

SELECT TOP 10
    CONVERT(DECIMAL(18,2), migs.avg_user_impact) AS avg_impact_percent,
    migs.user_seeks + migs.user_scans AS total_seeks_scans,
    mid.statement AS table_name,
    mid.equality_columns,
    mid.inequality_columns,
    mid.included_columns,
    'CREATE INDEX IX_' + OBJECT_NAME(mid.object_id) + '_Missing ON ' + mid.statement + 
    ' (' + ISNULL(mid.equality_columns, '') + 
    CASE WHEN mid.inequality_columns IS NOT NULL THEN ', ' + mid.inequality_columns ELSE '' END +
    ')' + 
    CASE WHEN mid.included_columns IS NOT NULL THEN ' INCLUDE (' + mid.included_columns + ')' ELSE '' END + ';' AS create_index_statement
FROM sys.dm_db_missing_index_groups mig
INNER JOIN sys.dm_db_missing_index_group_stats migs ON mig.index_group_handle = migs.group_handle
INNER JOIN sys.dm_db_missing_index_details mid ON mig.index_handle = mid.index_handle
WHERE migs.avg_user_impact > 50  -- %50'den fazla performans etkisi olan
ORDER BY migs.avg_user_impact DESC;
GO

-- ========================================
-- 5. INDEX USAGE STATISTICS
-- ========================================

PRINT '';
PRINT '5. Index Kullanım İstatistikleri...';
GO

SELECT TOP 20
    OBJECT_NAME(s.object_id) AS TableName,
    i.name AS IndexName,
    s.user_seeks AS UserSeeks,
    s.user_scans AS UserScans,
    s.user_lookups AS UserLookups,
    s.user_updates AS UserUpdates,
    CASE 
        WHEN s.user_seeks + s.user_scans + s.user_lookups = 0 THEN 'UNUSED'
        WHEN s.user_updates > (s.user_seeks + s.user_scans + s.user_lookups) * 10 THEN 'CONSIDER REMOVING'
        ELSE 'ACTIVE'
    END AS Status
FROM sys.dm_db_index_usage_stats s
INNER JOIN sys.indexes i ON s.object_id = i.object_id AND s.index_id = i.index_id
WHERE OBJECTPROPERTY(s.object_id, 'IsUserTable') = 1
    AND s.database_id = DB_ID()
ORDER BY s.user_seeks + s.user_scans + s.user_lookups DESC;
GO

-- ========================================
-- 6. DATABASE SIZE REPORT
-- ========================================

PRINT '';
PRINT '6. Database Boyut Raporu...';
GO

SELECT 
    name AS FileName,
    CAST(size/128.0 AS DECIMAL(10,2)) AS SizeMB,
    CAST(FILEPROPERTY(name, 'SpaceUsed')/128.0 AS DECIMAL(10,2)) AS UsedMB,
    CAST((size/128.0 - CAST(FILEPROPERTY(name, 'SpaceUsed') AS INT)/128.0) AS DECIMAL(10,2)) AS FreeMB,
    CAST(100 * (size/128.0 - CAST(FILEPROPERTY(name, 'SpaceUsed') AS INT)/128.0) / (size/128.0) AS DECIMAL(5,2)) AS FreePercent
FROM sys.database_files;
GO

-- ========================================
-- SONUÇ
-- ========================================

PRINT '';
PRINT '========================================';
PRINT 'INDEX MAINTENANCE TAMAMLANDI!';
PRINT GETDATE();
PRINT '========================================';
PRINT '';
PRINT 'ÖNERİLER:';
PRINT '• Bu script''i ayda 1 kez çalıştırın';
PRINT '• "Missing Index" önerilerini değerlendirin';
PRINT '• "UNUSED" index''leri kaldırmayı düşünün';
PRINT '• Database backup''ı düzenli alın';
PRINT '';
GO

