import express from "express";
import { stageController } from "../controllers/stage.js";

const router = express.Router();

router.get("/stage", stageController);

export default router;
