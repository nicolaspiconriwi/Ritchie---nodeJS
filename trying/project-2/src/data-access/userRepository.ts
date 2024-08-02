import {
  FieldPacket,
  Pool,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";
import { User } from "../interfaces/user";

export class UserRepository {
  constructor(private pool: Pool) {}

  async getAll(): Promise<User[]> {
    const [rows]: [RowDataPacket[], FieldPacket[]] = await this.pool.query(
      "SELECT * FROM users"
    );
    return rows as User[];
  }

  async getById(id: string): Promise<User | null> {
    const [rows]: [ResultSetHeader, FieldPacket[]] = await this.pool.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0];
    }

    return null;
  }

  async updateUser(id: string, user: Omit<User, "id">) {
    const [rows]: [ResultSetHeader, FieldPacket[]] = await this.pool.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [user.name, user.email, id]
    );
    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0];
    }
    return null;
  }
}
