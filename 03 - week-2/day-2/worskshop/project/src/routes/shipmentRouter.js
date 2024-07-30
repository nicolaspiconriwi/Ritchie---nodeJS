import { Router } from 'express';

export const shipmentRouter = Router();

shipmentRouter.get('/', (req, res) => {
    res.send('Desde envios');
});
