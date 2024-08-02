import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();

router.get('/', UserController.getAll);
// router.get('/users/:id', getUserById);
// router.post('/users', createUser);

export default router;