import express from "express";
import {
  adminForgotPassword,
  superAdminSetNewPasswordStudent,
  changePassAdmin,
  changePassStudent,
  studentForgotPassword,
  superAdminSetNewPasswordAdmin,
  getAllAdminRequestPassword,
  getAllStudentRequestPassword,
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
router.get("/admin/requestPassword", getAllAdminRequestPassword);
router.get("/student/requestPassword", getAllStudentRequestPassword);

export default router;
