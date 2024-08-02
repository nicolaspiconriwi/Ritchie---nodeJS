import { Router } from 'express';
import UserController from '../controllers/userController';

export const userRouter = Router();

userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUserById);
userRouter.post('/', UserController.createUser);