import express from "express";
import { addPlating, getPlating } from "../controllers/plating.js";

const router = express.Router();
router.post("/create", addPlating);
router.get("/read/:studentId", getPlating);

export default router;
