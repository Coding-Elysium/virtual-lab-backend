import express from "express";
import { addIngredients } from "../controllers/ingredient.js";
import upload from "../middleware/multer.js";

const router = express.Router();
router.post("/create", upload.single("image"), addIngredients);
// router.get("/read", getIngredients);

export default router;
