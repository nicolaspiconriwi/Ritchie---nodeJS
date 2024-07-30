import { Router } from 'express';
import { fileURLToPath } from "url";
import { promises as fs } from 'fs';
import path from 'path';

export const warehouseRouter = Router();

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const warehouseFilePath = path.join(_dirname, '../persistence/warehouses.json');

const readWarehousesFs = async () => {
    try {
        console.log(warehouseFilePath);
        const warehouses = await fs.readFile(warehouseFilePath);
        return JSON.parse(warehouses);
    } catch (err) {
        throw new Error(`Error en la promesa ${err}`);
    }
};

const writeWarehousesFs = async (warehouses) => {
    await fs.writeFile(warehouseFilePath, JSON.stringify(warehouses, null, 2));
};

warehouseRouter.post('/', async (req, res) => {
    const warehouses = await readWarehousesFs();
    const { name, location } = req.body;
    const warehouse = {
        id: Date.now(),
        name,
        location
    };
    warehouses.push(warehouse);
    await writeWarehousesFs(warehouses);
    res.status(201).json({
        message: 'Warehouse created successfully',
        warehouse
    });
});
