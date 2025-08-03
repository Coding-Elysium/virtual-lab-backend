import express from "express";
import {
  createPerformance,
  getPerformance,
  updatePerformance,
} from "../controllers/performance.js";

const router = express.Router();
router.post("/create", createPerformance);
router.get("/read/:studentId", getPerformance);
router.put("/update/:id", updatePerformance);

export default router;
