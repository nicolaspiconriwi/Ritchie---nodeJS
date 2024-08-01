import { Router } from 'express';
import { getAll, getById, create } from '../controllers/userController';

const router = Router();

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getById);

export default router;