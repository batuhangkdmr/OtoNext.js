import { getConnection, sql } from '../db';
import { Admin, CreateAdminDto, UpdateAdminDto } from '../models/Admin';
import bcrypt from 'bcryptjs';

class AdminsRepository {
  // GET - All admins (without password)
  static async findAll(): Promise<Omit<Admin, 'PasswordHash'>[]> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query('SELECT Id, Username, CreatedAt FROM Admins');
    return result.recordset;
  }

  // GET - Single admin by ID (without password)
  static async findById(id: number): Promise<Omit<Admin, 'PasswordHash'> | null> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query('SELECT Id, Username, CreatedAt FROM Admins WHERE Id = @id');
    return result.recordset[0] || null;
  }

  // GET - Admin by username (with password - for login)
  static async findByUsername(username: string): Promise<Admin | null> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('username', sql.NVarChar(50), username)
      .query('SELECT * FROM Admins WHERE Username = @username');
    return result.recordset[0] || null;
  }

  // POST - Create admin (register)
  static async create(data: CreateAdminDto): Promise<Omit<Admin, 'PasswordHash'>> {
    const pool = await getConnection();
    const passwordHash = await bcrypt.hash(data.Password, 10);

    const result = await pool
      .request()
      .input('username', sql.NVarChar(50), data.Username)
      .input('passwordHash', sql.NVarChar(200), passwordHash)
      .query(`
        INSERT INTO Admins (Username, PasswordHash, CreatedAt)
        OUTPUT INSERTED.Id, INSERTED.Username, INSERTED.CreatedAt
        VALUES (@username, @passwordHash, GETDATE())
      `);
    return result.recordset[0];
  }

  // PUT - Update admin
  static async update(id: number, data: UpdateAdminDto): Promise<Omit<Admin, 'PasswordHash'> | null> {
    const pool = await getConnection();
    const updates: string[] = [];
    const request = pool.request();

    if (data.Username !== undefined) {
      updates.push('Username = @username');
      request.input('username', sql.NVarChar(50), data.Username);
    }

    if (data.Password !== undefined && data.Password.trim() !== '') {
      const passwordHash = await bcrypt.hash(data.Password, 10);
      updates.push('PasswordHash = @passwordHash');
      request.input('passwordHash', sql.NVarChar(200), passwordHash);
    }

    if (updates.length === 0) return null;

    request.input('id', sql.Int, id);
    const result = await request.query(`
      UPDATE Admins 
      SET ${updates.join(', ')}
      OUTPUT INSERTED.Id, INSERTED.Username, INSERTED.CreatedAt
      WHERE Id = @id
    `);

    return result.recordset[0] || null;
  }

  // DELETE - Delete admin
  static async delete(id: number): Promise<boolean> {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query('DELETE FROM Admins WHERE Id = @id');
    return result.rowsAffected[0] > 0;
  }

  // Verify password
  static async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}

export default AdminsRepository;

