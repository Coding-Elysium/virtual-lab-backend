import express from "express";
import { addIngredients, getIngredients } from "../controllers/ingredient.js";

const router = express.Router();
router.post("/create", addIngredients);
router.get("/read", getIngredients);

export default router;
