import express from "express";
import { createAction, getAction } from "../controllers/actionsingredients.js";

const router = express.Router();
router.post("/create", createAction);
router.get("/read", getAction);

export default router;
