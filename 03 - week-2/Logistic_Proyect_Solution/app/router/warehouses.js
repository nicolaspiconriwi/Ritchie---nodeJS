import { Router } from "express";
import { getAll, insert, update } from "../controllers/warehouseController.js";

const warehouseRouter = Router();

warehouseRouter.get("/", getAll);
warehouseRouter.post("/", insert);
warehouseRouter.put("/:id", update)


export default warehouseRouter;