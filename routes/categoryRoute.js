import express from "express";
import { addCategory, deleteCategory, getCategory } from "../controllers/category.js";

const router = express.Router();
router.post("/create", addCategory);
router.delete("/delete/:id", deleteCategory);
router.get("/read", getCategory);

export default router;
