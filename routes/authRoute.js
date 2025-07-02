import express from "express";
import {
  loginAdminController,
  loginStudentController,
} from "../controllers/auth.js";

const router = express.Router();
router.post("/loginStudent", loginStudentController);
router.post("/loginAdmin", loginAdminController);

export default router;
