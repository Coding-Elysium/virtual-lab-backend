import express from "express";
import { createAdmin, deleteAdmin, getAllAdmin, updateAdmin } from "../controllers/admin.js";

const router = express.Router();
router.post("/create", createAdmin);
router.get("/read", getAllAdmin);
router.delete("/delete/:id", deleteAdmin);
router.put("/update/:id", updateAdmin)

export default router;
