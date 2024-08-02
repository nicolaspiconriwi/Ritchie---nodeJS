// src/controllers/ProductController.ts
import { container } from "tsyringe";
import { Request, Response } from "express";
import UserService from "../services/userService";
import jwt from "jsonwebtoken";
import { User } from "../models";

export default class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userService = container.resolve(UserService);
      const user: User = await userService.checkUserCredentials(
        email,
        password
      );
      // Generar token JWT
      const token = AuthController.generateToken({
        id: user.id,
        username: user.email,
      });
      res.status(200).json({ status: 200, token });
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }

  static generateToken = (user: { id: number; username: string }) => {
    const token = jwt.sign(user, "secret", { expiresIn: "1h" });
    return token;
  };
}
