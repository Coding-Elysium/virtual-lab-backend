import express from "express";
import { createPerformance } from "../controllers/performance.js";

const router = express.Router();
router.post("/create", createPerformance);

export default router;
