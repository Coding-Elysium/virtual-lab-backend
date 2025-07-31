import express from "express";
import { addPlating } from "../controllers/plating.js";

const router = express.Router();
router.post("/create", addPlating);

export default router;
