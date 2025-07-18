import express from "express";
import { addInventory, getInventory } from "../controllers/inventory.js";

const router = express.Router();
router.post("/create", addInventory);
router.get("/read/:id", getInventory);

export default router;
