import express from 'express';
import warehouseRouter from '../router/warehouses.js';

const routes = express();

routes.use("/warehouses", warehouseRouter);

export default routes;