import express from "express";
import { createCoc, getStudentCoc } from "../controllers/coc.js";

const router = express.Router();
router.post("/create", createCoc);
router.get("/read/:studentId", getStudentCoc);

export default router;
