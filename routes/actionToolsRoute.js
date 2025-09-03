import express from "express";
import { getActionTools } from "../controllers/actionsTools.js";

const router = express.Router();
router.get("/read", getActionTools);

export default router;
