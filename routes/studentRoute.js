import express from "express";
import {
  approvedStudent,
  createStudent,
  deleteStudent,
  getAllStudents,
  getOneStudent,
  getStudentsApproved,
  getStudentsPending,
  updateStudent,
} from "../controllers/student.js";

const router = express.Router();
router.post("/create", createStudent);
router.get("/read/approved", getStudentsApproved);
router.get("/read/pending", getStudentsPending);
router.get("/read/:id", getOneStudent);
router.get("/read", getAllStudents);
router.put("/update/:id", updateStudent);
router.put("/update/approved/:id", approvedStudent);
router.delete("/delete/:id", deleteStudent);

export default router;
