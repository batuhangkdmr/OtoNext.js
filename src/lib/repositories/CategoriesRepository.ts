import { getConnection, sql } from '../db';
import { Category, CreateCategoryDto, UpdateCategoryDto } from '../models/Category';
import { unstable_cache } from 'next/cache';
import { CACHE_TAGS, CACHE_REVALIDATE } from '../cache';

class CategoriesRepository {
  // Helper to build category tree
  private static buildTree(categories: Category[], parentId: number | null = null): Category[] {
    return categories
      .filter(cat => cat.ParentId === parentId)
      .map(cat => ({
        ...cat,
        SubCategories: this.buildTree(categories, cat.Id),
      }));
  }

  // GET - All categories (hierarchical) with cache
  static async findAll(): Promise<Category[]> {
    return unstable_cache(
      async () => {
        const pool = await getConnection();
        const result = await pool
          .request()
          .query('SELECT * FROM Categories ORDER BY Name');
        
        return this.buildTree(result.recordset);
      },
      ['categories-all'],
      {
        tags: [CACHE_TAGS.CATEGORIES],
        revalidate: CACHE_REVALIDATE.CATEGORIES, // 1 hour
      }
    )();
  }

  // GET - Single category with subcategories
  static async findById(id: number): Promise<Category | null> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM Categories WHERE Id = @id');
    
    if (result.recordset.length === 0) return null;

    const subResult = await pool
      .request()
      .input('parentId', sql.Int, id)
      .query('SELECT * FROM Categories WHERE ParentId = @parentId');

    const category = result.recordset[0];
    category.SubCategories = subResult.recordset;
    return category;
  }

  // POST - Create category
  static async create(data: CreateCategoryDto): Promise<Category> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('name', sql.NVarChar(100), data.Name)
      .input('parentId', sql.Int, data.ParentId || null)
      .query(`
        INSERT INTO Categories (Name, ParentId, CreatedAt)
        OUTPUT INSERTED.*
        VALUES (@name, @parentId, GETDATE())
      `);
    return result.recordset[0];
  }

  // PUT - Update category
  static async update(id: number, data: UpdateCategoryDto): Promise<Category | null> {
    const pool = await getConnection();
    const updates: string[] = [];
    const request = pool.request();

    if (data.Name !== undefined) {
      updates.push('Name = @name');
      request.input('name', sql.NVarChar(100), data.Name);
    }

    if (data.ParentId !== undefined) {
      updates.push('ParentId = @parentId');
      request.input('parentId', sql.Int, data.ParentId);
    }

    if (updates.length === 0) return null;

    request.input('id', sql.Int, id);
    const result = await request.query(`
      UPDATE Categories 
      SET ${updates.join(', ')}
      OUTPUT INSERTED.*
      WHERE Id = @id
    `);

    return result.recordset[0] || null;
  }

  // DELETE - Delete category (check for products first)
  static async delete(id: number): Promise<{ success: boolean; error?: string }> {
    const pool = await getConnection();
    
    // Check if category has products
    const hasProducts = await pool
      .request()
      .input('id', sql.Int, id)
      .query('SELECT COUNT(*) as Count FROM Products WHERE CategoryId = @id OR SubCategoryId = @id');

    if (hasProducts.recordset[0].Count > 0) {
      return {
        success: false,
        error: 'Bu kategoriye bağlı ürünler var, silinemez.',
      };
    }

    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query('DELETE FROM Categories WHERE Id = @id');

    return { success: result.rowsAffected[0] > 0 };
  }
}

export default CategoriesRepository;

