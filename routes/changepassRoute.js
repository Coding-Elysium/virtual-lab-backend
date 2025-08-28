import express from "express";
import {
  adminForgotPassword,
  superAdminSetNewPasswordStudent,
  changePassAdmin,
  changePassStudent,
  studentForgotPassword,
  superAdminSetNewPasswordAdmin,
} from "../controllers/changepass.js";

const router = express.Router();
router.post("/admin", changePassAdmin);
router.post("/student", changePassStudent);
router.post("/admin/forgotpassword", adminForgotPassword);
router.post("/student/forgotpassword", studentForgotPassword);
router.post("/admin/setNewPassword/:requestId", superAdminSetNewPasswordAdmin);
router.post(
  "/student/setNewPassword/:requestId",
  superAdminSetNewPasswordStudent
);

export default router;
