import { Router } from 'express';
import {userRouter, productRouter} from './';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
