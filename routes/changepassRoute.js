import express from "express";
import {
  adminForgotPassword,
  adminSetNewPasswordStudent,
  changePassAdmin,
  changePassStudent,
  studentForgotPassword,
  superAdminSetNewPasswordAdmin,
} from "../controllers/changepass.js";

const router = express.Router();
router.post("/admin", changePassAdmin);
router.post("/student", changePassStudent);
router.post("/admin/forgotpassword", adminForgotPassword);
router.post("/student/forgotPassword", studentForgotPassword);
router.post("/admin/setNewPassword/:requestId", superAdminSetNewPasswordAdmin);
router.post("/student/setNewPassword/:requestId", adminSetNewPasswordStudent);

export default router;
