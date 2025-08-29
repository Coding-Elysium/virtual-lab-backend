import mongoose from "mongoose";
import Admin from "../schema/AdminModel.js";
import bcrypt from "bcrypt";

export const createAdmin = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      username,
      password,
      subject,
      employeeNumber,
      position,
      gender,
      role = "admin",
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !username ||
      !password ||
      !subject ||
      !employeeNumber ||
      !position ||
      !gender
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(409).json({ message: "Admin already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      firstName,
      lastName,
      username,
      password: hashedPassword,
      subject,
      employeeNumber,
      position,
      gender,
      role,
    });

    await admin.save();

    const { password: _, ...adminData } = admin.toObject();

    res
      .status(201)
      .json({ message: "Admin created successfully", admin: adminData });
  } catch (error) {
    console.error("Error creating admin:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAllAdmin = async (req, res) => {
  try {
    const admin = await Admin.find({ role: "admin" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: "Server errors", error: error.message });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Admin." });
    }

    const admin = await Admin.findByIdAndDelete(id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Admin", error: error.message });
  }
};

export const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      firstName,
      lastName,
      username,
      subject,
      employeeNumber,
      position,
      gender,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Admin." });
    }

    const existingAdmin = await Admin.findOne({
      $or: [{ employeeNumber }, { username }],
      _id: { $ne: id },
    });
    if (existingAdmin) {
      return res.status(409).json({ message: `LRN or username already exist` });
    }

    const admin = await Admin.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        username,
        subject,
        employeeNumber,
        position,
        gender,
      },
      { new: true }
    );

    if (!admin) {
      return res.status(404).json({ message: "Student not found." });
    }

    res.status(200).json({ message: "Admin updated successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update Admin", error: error.message });
  }
};
