-- ========================================
-- YONEL-NEX DATABASE INDEXING
-- Performance Optimization for MSSQL Server
-- ========================================

-- Bu script'i MSSQL Server Management Studio'da çalıştırın
-- UYARI: Production'da backup aldıktan sonra uygulayın!

USE [yone8215_yoneltic_y]  -- Database adınızı buraya yazın
GO

PRINT '========================================';
PRINT 'DATABASE INDEXING BAŞLIYOR';
PRINT '========================================';
GO

-- ========================================
-- PRODUCTS TABLE INDEXES
-- ========================================

PRINT 'Products tablosu index''leri oluşturuluyor...';
GO

-- 1. CategoryId için index (en çok kullanılan query)
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_Products_CategoryId' AND object_id = OBJECT_ID('Products'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_Products_CategoryId
    ON Products(CategoryId)
    INCLUDE (Name, Description, ImageUrl, CreatedAt);
    
    PRINT '✓ IX_Products_CategoryId oluşturuldu';
END
ELSE
    PRINT '✓ IX_Products_CategoryId zaten mevcut';
GO

-- 2. SubCategoryId için index
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_Products_SubCategoryId' AND object_id = OBJECT_ID('Products'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_Products_SubCategoryId
    ON Products(SubCategoryId)
    INCLUDE (Name, Description, ImageUrl, CreatedAt);
    
    PRINT '✓ IX_Products_SubCategoryId oluşturuldu';
END
ELSE
    PRINT '✓ IX_Products_SubCategoryId zaten mevcut';
GO

-- 3. Name için full-text search index (arama için)
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_Products_Name' AND object_id = OBJECT_ID('Products'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_Products_Name
    ON Products(Name)
    INCLUDE (Description, CategoryId, SubCategoryId, ImageUrl);
    
    PRINT '✓ IX_Products_Name oluşturuldu';
END
ELSE
    PRINT '✓ IX_Products_Name zaten mevcut';
GO

-- 4. CreatedAt için index (sıralama için)
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_Products_CreatedAt' AND object_id = OBJECT_ID('Products'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_Products_CreatedAt
    ON Products(CreatedAt DESC)
    INCLUDE (Id, Name, CategoryId, SubCategoryId);
    
    PRINT '✓ IX_Products_CreatedAt oluşturuldu';
END
ELSE
    PRINT '✓ IX_Products_CreatedAt zaten mevcut';
GO

-- 5. Composite index: CategoryId + CreatedAt (çok kullanılan kombinasyon)
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_Products_CategoryId_CreatedAt' AND object_id = OBJECT_ID('Products'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_Products_CategoryId_CreatedAt
    ON Products(CategoryId, CreatedAt DESC)
    INCLUDE (Name, Description, ImageUrl, SubCategoryId);
    
    PRINT '✓ IX_Products_CategoryId_CreatedAt oluşturuldu';
END
ELSE
    PRINT '✓ IX_Products_CategoryId_CreatedAt zaten mevcut';
GO

-- ========================================
-- CATEGORIES TABLE INDEXES
-- ========================================

PRINT 'Categories tablosu index''leri oluşturuluyor...';
GO

-- 1. ParentId için index (hiyerarşik sorgu için)
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_Categories_ParentId' AND object_id = OBJECT_ID('Categories'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_Categories_ParentId
    ON Categories(ParentId)
    INCLUDE (Name, CreatedAt);
    
    PRINT '✓ IX_Categories_ParentId oluşturuldu';
END
ELSE
    PRINT '✓ IX_Categories_ParentId zaten mevcut';
GO

-- 2. Name için index (arama için)
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_Categories_Name' AND object_id = OBJECT_ID('Categories'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_Categories_Name
    ON Categories(Name)
    INCLUDE (ParentId, CreatedAt);
    
    PRINT '✓ IX_Categories_Name oluşturuldu';
END
ELSE
    PRINT '✓ IX_Categories_Name zaten mevcut';
GO

-- ========================================
-- SLIDERIMAGES TABLE INDEXES
-- ========================================

PRINT 'SliderImages tablosu index''leri oluşturuluyor...';
GO

-- 1. Order + IsActive için index (slider sıralaması)
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_SliderImages_Order_IsActive' AND object_id = OBJECT_ID('SliderImages'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_SliderImages_Order_IsActive
    ON SliderImages([Order], IsActive)
    INCLUDE (ImageUrl, Title, Description, Link);
    
    PRINT '✓ IX_SliderImages_Order_IsActive oluşturuldu';
END
ELSE
    PRINT '✓ IX_SliderImages_Order_IsActive zaten mevcut';
GO

-- ========================================
-- ADMINS TABLE INDEXES
-- ========================================

PRINT 'Admins tablosu index''leri oluşturuluyor...';
GO

-- 1. Username için unique index (login için)
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'IX_Admins_Username' AND object_id = OBJECT_ID('Admins'))
BEGIN
    CREATE UNIQUE NONCLUSTERED INDEX IX_Admins_Username
    ON Admins(Username)
    INCLUDE (PasswordHash, Role);
    
    PRINT '✓ IX_Admins_Username oluşturuldu';
END
ELSE
    PRINT '✓ IX_Admins_Username zaten mevcut';
GO

-- ========================================
-- INDEX İSTATİSTİKLERİ GÜNCELLEME
-- ========================================

PRINT 'Index istatistikleri güncelleniyor...';
GO

UPDATE STATISTICS Products;
UPDATE STATISTICS Categories;
UPDATE STATISTICS SliderImages;
UPDATE STATISTICS Admins;

PRINT '✓ İstatistikler güncellendi';
GO

-- ========================================
-- INDEX FRAGMENTATION KONTROLÜ
-- ========================================

PRINT 'Index fragmentation raporu...';
GO

SELECT 
    OBJECT_NAME(ips.object_id) AS TableName,
    i.name AS IndexName,
    ips.index_type_desc AS IndexType,
    ips.avg_fragmentation_in_percent AS FragmentationPercent,
    ips.page_count AS PageCount
FROM sys.dm_db_index_physical_stats(DB_ID(), NULL, NULL, NULL, 'DETAILED') ips
INNER JOIN sys.indexes i ON ips.object_id = i.object_id AND ips.index_id = i.index_id
WHERE ips.avg_fragmentation_in_percent > 10
    AND ips.page_count > 100
ORDER BY ips.avg_fragmentation_in_percent DESC;
GO

-- ========================================
-- PERFORMANS ÖNERİLERİ
-- ========================================

PRINT '';
PRINT '========================================';
PRINT 'INDEX OLUŞTURMA TAMAMLANDI!';
PRINT '========================================';
PRINT '';
PRINT 'PERFORMANS ÖNERİLERİ:';
PRINT '1. İndexler oluşturuldu, query performansı artacak';
PRINT '2. Ayda 1 kez index fragmentation kontrolü yapın';
PRINT '3. Yüksek fragmentation varsa (>30%), index rebuild yapın:';
PRINT '   ALTER INDEX ALL ON Products REBUILD;';
PRINT '4. İstatistikleri düzenli güncelleyin (haftada 1):';
PRINT '   UPDATE STATISTICS Products;';
PRINT '';
PRINT 'TEST QUERY (Index kullanımını kontrol edin):';
PRINT '   SET STATISTICS IO ON;';
PRINT '   SELECT * FROM Products WHERE CategoryId = 34;';
PRINT '   -- "Index Seek" görmeli, "Table Scan" görmemelisiniz';
PRINT '';
GO

