import { FieldPacket, ResultSetHeader } from "mysql2";
import { Pool } from "mysql2/promise";
import { User } from "../interfaces/user";

export class UserRepository {
  constructor(private pool: Pool) {}

  async getAll(): Promise<User[]> {
    const [rows]: [ResultSetHeader, FieldPacket[]] = await this.pool.query(
      "SELECT * FROM users"
    );
    return rows as unknown as Promise<User[]>; // This is a workaround for the type mismatch
  }

  async getById(id: number): Promise<User | null> {
    const [rows]: [ResultSetHeader, FieldPacket[]] = await this.pool.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0];
    }
    return null;
  }

  async create(newUser: User): Promise<User> {
    const [result]: [ResultSetHeader, FieldPacket[]] = await this.pool.query(
      "INSERT INTO users SET ?",
      [newUser]
    );
    return { ...newUser, id: result.insertId };
  }
}
