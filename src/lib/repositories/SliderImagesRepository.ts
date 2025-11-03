import { getConnection, sql } from '../db';
import { SliderImage, CreateSliderImageDto, UpdateSliderImageDto } from '../models/SliderImage';
import { unstable_cache } from 'next/cache';
import { CACHE_TAGS, CACHE_REVALIDATE } from '../cache';

class SliderImagesRepository {
  // GET - All slider images with cache
  static async findAll(): Promise<SliderImage[]> {
    return unstable_cache(
      async () => {
        const pool = await getConnection();
        const result = await pool
          .request()
          .query('SELECT * FROM SliderImages ORDER BY Id DESC');
        return result.recordset;
      },
      ['sliders-all'],
      {
        tags: [CACHE_TAGS.SLIDERS],
        revalidate: CACHE_REVALIDATE.SLIDERS, // 10 minutes
      }
    )();
  }

  // GET - Single slider image
  static async findById(id: number): Promise<SliderImage | null> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM SliderImages WHERE Id = @id');
    return result.recordset[0] || null;
  }

  // POST - Create slider image
  static async create(data: CreateSliderImageDto): Promise<SliderImage> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('imageUrl', sql.NVarChar(500), data.ImageUrl)
      .input('cloudinaryPublicId', sql.NVarChar(200), data.CloudinaryPublicId)
      .query(`
        INSERT INTO SliderImages (ImageUrl, CloudinaryPublicId, CreatedAt)
        OUTPUT INSERTED.*
        VALUES (@imageUrl, @cloudinaryPublicId, GETDATE())
      `);
    return result.recordset[0];
  }

  // PUT - Update slider image
  static async update(id: number, data: UpdateSliderImageDto): Promise<SliderImage | null> {
    const pool = await getConnection();
    const updates: string[] = [];
    const request = pool.request();

    if (data.ImageUrl !== undefined) {
      updates.push('ImageUrl = @imageUrl');
      request.input('imageUrl', sql.NVarChar(500), data.ImageUrl);
    }

    if (data.CloudinaryPublicId !== undefined) {
      updates.push('CloudinaryPublicId = @cloudinaryPublicId');
      request.input('cloudinaryPublicId', sql.NVarChar(200), data.CloudinaryPublicId);
    }

    if (updates.length === 0) return null;

    request.input('id', sql.Int, id);
    const result = await request.query(`
      UPDATE SliderImages 
      SET ${updates.join(', ')}
      OUTPUT INSERTED.*
      WHERE Id = @id
    `);

    return result.recordset[0] || null;
  }

  // DELETE - Delete slider image
  static async delete(id: number): Promise<boolean> {
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input('id', sql.Int, id)
        .query('DELETE FROM SliderImages WHERE Id = @id');
      
      console.log('Delete result:', result.rowsAffected);
      return result.rowsAffected[0] > 0;
    } catch (error) {
      console.error('SliderImagesRepository.delete error:', error);
      throw error;
    }
  }
}

export default SliderImagesRepository;

