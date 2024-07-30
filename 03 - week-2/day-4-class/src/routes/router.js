import express from 'express'
import { warehouseRouter } from './warehouseRouter.js';

export const routes = express();

routes.use('/warehouses', warehouseRouter);
// app.use('/shipments', shipmentRouter);
// app.use('/vehicles', vehicleRouter);
// app.use('/drivers', driverRouter);