import express from "express";
import { createAdmin } from "../controllers/admin.js";

const router = express.Router();
router.post("/create", createAdmin);

export default router;
