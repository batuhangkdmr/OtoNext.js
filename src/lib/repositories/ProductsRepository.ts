import { getConnection, sql } from '../db';
import { Product, CreateProductDto, UpdateProductDto } from '../models/Product';

class ProductsRepository {
  // GET - All products with pagination and filters
  static async findAll(params?: {
    page?: number;
    limit?: number;
    search?: string;
    categoryId?: number;
    subCategory?: string;
    sort?: string;
  }): Promise<{ products: Product[]; total: number }> {
    const pool = await getConnection();
    const page = params?.page || 1;
    const limit = params?.limit || 30;
    const offset = (page - 1) * limit;
    const sort = params?.sort || 'newest';

    let queryStr = `
      SELECT 
        p.Id, p.Name, p.Description, p.ImageUrl, p.CloudinaryPublicId,
        p.CategoryId, p.SubCategoryId, p.CreatedAt,
        c.Name as CategoryName,
        sc.Name as SubCategoryName
      FROM Products p
      LEFT JOIN Categories c ON p.CategoryId = c.Id
      LEFT JOIN Categories sc ON p.SubCategoryId = sc.Id
      WHERE 1=1
    `;

    const request = pool.request();

    if (params?.search) {
      queryStr += ` AND (p.Name LIKE '%' + @search + '%' OR p.Description LIKE '%' + @search + '%' OR c.Name LIKE '%' + @search + '%' OR sc.Name LIKE '%' + @search + '%')`;
      request.input('search', sql.NVarChar, params.search);
    }

    // Kategori filtreleme - HEM CategoryId HEM SubCategoryId alanlarında ara
    // Böylece ana kategori veya alt kategori fark etmez, her ikisinde de bulur
    if (params?.categoryId) {
      queryStr += ` AND (p.CategoryId = @categoryId OR p.SubCategoryId = @categoryId)`;
      request.input('categoryId', sql.Int, params.categoryId);
    }

    if (params?.subCategory && params.subCategory !== 'all') {
      queryStr += ` AND sc.Name = @subCategory`;
      request.input('subCategory', sql.NVarChar, params.subCategory);
    }

    // Count total
    const countQuery = queryStr.replace(/SELECT[\s\S]+FROM/, 'SELECT COUNT(*) as Total FROM');
    const countResult = await request.query(countQuery);
    const total = countResult.recordset[0].Total;

    // Add sorting
    let orderBy = 'p.CreatedAt DESC'; // Default: newest
    switch (sort) {
      case 'oldest':
        orderBy = 'p.CreatedAt ASC';
        break;
      case 'name-asc':
        orderBy = 'p.Name ASC';
        break;
      case 'name-desc':
        orderBy = 'p.Name DESC';
        break;
      case 'newest':
      default:
        orderBy = 'p.CreatedAt DESC';
        break;
    }

    // Get products with pagination
    queryStr += ` ORDER BY ${orderBy} OFFSET @offset ROWS FETCH NEXT @limit ROWS ONLY`;
    request.input('offset', sql.Int, offset);
    request.input('limit', sql.Int, limit);

    const result = await request.query(queryStr);
    return { products: result.recordset, total };
  }

  // GET - Single product by ID
  static async findById(id: number): Promise<Product | null> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query(`
        SELECT 
          p.*, 
          c.Name as CategoryName,
          sc.Name as SubCategoryName
        FROM Products p
        LEFT JOIN Categories c ON p.CategoryId = c.Id
        LEFT JOIN Categories sc ON p.SubCategoryId = sc.Id
        WHERE p.Id = @id
      `);
    return result.recordset[0] || null;
  }

  // POST - Create product
  static async create(data: CreateProductDto): Promise<Product> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('name', sql.NVarChar(200), data.Name)
      .input('description', sql.NVarChar(sql.MAX), data.Description || null)
      .input('imageUrl', sql.NVarChar(500), data.ImageUrl || null)
      .input('cloudinaryPublicId', sql.NVarChar(200), data.CloudinaryPublicId || null)
      .input('categoryId', sql.Int, data.CategoryId || null)
      .input('subCategoryId', sql.Int, data.SubCategoryId || null)
      .query(`
        INSERT INTO Products (Name, Description, ImageUrl, CloudinaryPublicId, CategoryId, SubCategoryId, CreatedAt)
        OUTPUT INSERTED.*
        VALUES (@name, @description, @imageUrl, @cloudinaryPublicId, @categoryId, @subCategoryId, GETDATE())
      `);
    return result.recordset[0];
  }

  // PUT - Update product
  static async update(id: number, data: UpdateProductDto): Promise<Product | null> {
    const pool = await getConnection();
    const updates: string[] = [];
    const request = pool.request();

    if (data.Name !== undefined) {
      updates.push('Name = @name');
      request.input('name', sql.NVarChar(200), data.Name);
    }

    if (data.Description !== undefined) {
      updates.push('Description = @description');
      request.input('description', sql.NVarChar(sql.MAX), data.Description);
    }

    if (data.ImageUrl !== undefined) {
      updates.push('ImageUrl = @imageUrl');
      request.input('imageUrl', sql.NVarChar(500), data.ImageUrl);
    }

    if (data.CloudinaryPublicId !== undefined) {
      updates.push('CloudinaryPublicId = @cloudinaryPublicId');
      request.input('cloudinaryPublicId', sql.NVarChar(200), data.CloudinaryPublicId);
    }

    if (data.CategoryId !== undefined) {
      updates.push('CategoryId = @categoryId');
      request.input('categoryId', sql.Int, data.CategoryId);
    }

    if (data.SubCategoryId !== undefined) {
      updates.push('SubCategoryId = @subCategoryId');
      request.input('subCategoryId', sql.Int, data.SubCategoryId);
    }

    if (updates.length === 0) return null;

    request.input('id', sql.Int, id);
    const result = await request.query(`
      UPDATE Products 
      SET ${updates.join(', ')}
      OUTPUT INSERTED.*
      WHERE Id = @id
    `);

    return result.recordset[0] || null;
  }

  // DELETE - Delete product
  static async delete(id: number): Promise<boolean> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query('DELETE FROM Products WHERE Id = @id');
    return result.rowsAffected[0] > 0;
  }
}

export default ProductsRepository;

