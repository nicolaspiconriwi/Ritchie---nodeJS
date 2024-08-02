import { Router } from 'express';
import {userRouter, productRouter} from './';
import { authRouter } from './authRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/auth', authRouter);

export default router;
