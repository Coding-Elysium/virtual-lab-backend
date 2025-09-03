import express from "express";
import { getActionTools } from "../controllers/actionsTools";

const router = express.Router();
router.get("/read", getActionTools);

export default router;
