import express from "express";
import { addKitchenTools, readKitchenTools } from "../controllers/kitchenTools.js";
import upload from "../middleware/multer.js";

const router = express.Router();
router.post("/create", upload.single("image"), addKitchenTools);
router.get("/read", readKitchenTools);
// router.post("/create", upload.single("image"), addKitchenTools);

export default router;
