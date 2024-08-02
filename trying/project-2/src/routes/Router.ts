import express from 'express'
import { userRouter } from './userRoutes'

export const Router = express.Router()

Router.use('/users', userRouter);
