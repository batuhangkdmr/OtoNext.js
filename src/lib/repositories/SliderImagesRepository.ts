import { getConnection, sql } from '../db';
import { SliderImage, CreateSliderImageDto } from '../models/SliderImage';

class SliderImagesRepository {
  // GET - All slider images
  static async findAll(): Promise<SliderImage[]> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query('SELECT * FROM SliderImages ORDER BY Id DESC');
    return result.recordset;
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

  // DELETE - Delete slider image
  static async delete(id: number): Promise<boolean> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query('DELETE FROM SliderImages WHERE Id = @id');
    return result.rowsAffected[0] > 0;
  }
}

export default SliderImagesRepository;

