import express from "express";
import {
  createPerformance,
  getPerformance,
} from "../controllers/performance.js";

const router = express.Router();
router.post("/create", createPerformance);
router.get("/read/:studentId/:cocId", getPerformance);

export default router;
