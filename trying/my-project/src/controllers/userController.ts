import { FieldPacket, ResultSetHeader } from "mysql2";
import { Request, Response } from "express";
import { User } from "../interfaces/user";
import pool from "../config/db";
import { UserRepository } from "../data-access/userModel";

export const getAll = async (_: Request, res: Response): Promise<void> => {
  try {
    const userRepository: UserRepository = new UserRepository(pool); // Recordemos que podemos tipar la variable userRepository usando UserRepository clase
    const users: User[] = await userRepository.getAll();
    ApiResponse.success(res, 200, users);
  } catch (error: any) {
    ApiResponse.error(res, 500, error.message);
  }
};

export const getById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const [rows]: [ResultSetHeader, FieldPacket[]] = await pool.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    if (Array.isArray(rows) && rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
};

export const create = async (req: Request, res: Response) => {
  const newUser: User = req.body;
  try {
    const [result]: [ResultSetHeader, FieldPacket[]] = await pool.query(
      "INSERT INTO users SET ?",
      [newUser]
    );
    res.status(201).json({ ...newUser, id: result.insertId });
  } catch (error) {
    res.status(500).send("Server error");
  }
};
