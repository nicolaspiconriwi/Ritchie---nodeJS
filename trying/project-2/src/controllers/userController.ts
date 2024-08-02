import { UserRepository } from "../data-access/userRepository";
import { Request, Response } from "express";
import { User } from "../interfaces/user";
import pool from "../config/db";

class UserController {
  static async getAll(_: Request, res: Response) {
    try {
      const userRepository = new UserRepository(pool);
      const users: User[] = await userRepository.getAll();
      res.status(200).json({
        status: 200,
        data: users,
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
      return [];
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const userRepository = new UserRepository(pool);
      const user: User | null = await userRepository.getById(req.params.id);
      res.status(200).json({
        status: 200,
        data: user,
      });
    } catch (error: any) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const userRepository = new UserRepository(pool);
      const userUpdated = userRepository.updateUser(req.params.id, req.body);
      res.status(200).json({
        status: 200,
        data: userUpdated,
      });
    } catch (error: any) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }
}

export default UserController;
