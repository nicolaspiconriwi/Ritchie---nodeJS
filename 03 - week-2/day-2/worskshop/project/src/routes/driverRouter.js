import { Router } from 'express';

export const driverRouter = Router();

driverRouter.get('/', (req, res) => {
    res.send('Desde conductores');
});
