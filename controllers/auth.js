import Admin from "../schema/AdminModel.js";
import Student from "../schema/StudentModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginStudentController = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "username and password are requireds" });
    }

    const user = await Student.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.status !== "Approved") {
      return res.status(401).json({
        success: false,
        message: "Wait for admin to approve your account",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    res
      .status(200)
      .json({ success: true, message: "Login successful", data: user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export const loginAdminController = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "username and password are required" });
    }

    const user = await Admin.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      admin: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        role: user.role,
        subject: user.subject,
        employeeNumber: user.employeeNumber,
        position: user.position,
        gender: user.gender,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
