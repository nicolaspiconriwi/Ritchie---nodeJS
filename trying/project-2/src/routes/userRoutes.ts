import { Router } from "express";
import UserController from "../controllers/userController";

export const userRouter = Router();

userRouter.get("/", UserController.getAll);
userRouter.get("/:id", UserController.getById);
userRouter.put("/:id", UserController.update);
