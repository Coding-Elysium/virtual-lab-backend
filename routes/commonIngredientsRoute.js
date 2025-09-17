import express from "express";
import upload from "../middleware/multer.js";
import { addCommonIngredients, getCommonIngredient } from "../controllers/commonIngredients.js";

const router = express.Router();
router.post("/create", upload.single("image"), addCommonIngredients);
router.get("/read", getCommonIngredient);

export default router;
