import express from 'express';

import {
    warehouseRouter,
    driverRouter,
    vehicleRouter,
    shipmentRouter
} from './index.js';

// Create a new router
const routes = express();

// Routes
routes.use('/warehouses', warehouseRouter);
routes.use('/drivers', driverRouter);
routes.use('/vehicles', vehicleRouter);
routes.use('/shipments', shipmentRouter);

// Export the router
export default routes;
