import express from "express";
import { createDish, getStudentCoc } from "../controllers/coc.js";

const router = express.Router();
router.post("/create", createDish);
router.get("/read/:studentId", getStudentCoc);

export default router;
