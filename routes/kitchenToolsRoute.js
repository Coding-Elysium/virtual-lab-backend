import express from "express";
import { addKitchenTools } from "../controllers/kitchenTools.js";
import upload from "../middleware/multer.js";

const router = express.Router();
router.post("/create", upload.single("image"), addKitchenTools);
// router.post("/create", upload.single("image"), addKitchenTools);

export default router;
