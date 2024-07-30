import { Router } from "express";
import { pool } from "../../config/db.js";

export const warehouseRouter = Router();

warehouseRouter.get('/', async (req, res) => {
    try {
        const [warehouses] = await pool.query('SELECT * FROM warehouses');
        res.status(200).json({
            message: "Warehouses successfully fetched",
            data: warehouses
        })
    } catch (error) {
        res.status(500).json({
            error: error.sqlMessage,
            errno: error.errno
        });
    }
});

const createRequestFunction = async (req, res) => {
    const { name, location } = req.body;
    try {
        const warehouseCreated = await pool.query('INSERT INTO warehouses (name, location) VALUES (?, ?)', [name, location]);
        console.log(warehouseCreated);
        res.status(201).json({
            message: 'Warehouses created'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error.sqlMessage,
            errno: error.errno
        });
    }
}

warehouseRouter.post('/', createRequestFunction);
warehouseRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, location } = req.body;
    try {
        const warehouseUpdated = await pool.query('UPDATE warehouses SET name = ? WHERE id = ?', [name, id])
        console.log(warehouseUpdated);
        res.json({
            message: "Warehouse updated"
        })
    } catch (error) {
        res.json({
            error: error.sqlMessage,
            errno: error.errno
        })
    }
});

// Jerarquia de recursos

// /vehicles/:vehicleId/warehouses

