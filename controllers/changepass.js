import Admin from "../schema/AdminModel.js";
import PassRequestAdminModel from "../schema/PassRequestAdminModel.js";
import PassRequestStudentModel from "../schema/PassRequestStudentModel.js";
import Student from "../schema/StudentModel.js";
import bcrypt from "bcrypt";

export const changePassAdmin = async (req, res) => {
  try {
    const { employeeNumber, newPassword } = req.body;

    const admin = await Admin.findOne({ employeeNumber });
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashedPassword;
    await admin.save();

    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Error in changePassAdmin:", error);
    res.status(500).json({
      success: false,
      message: "Error changing password",
      error: error.message,
    });
  }
};

export const changePassStudent = async (req, res) => {
  try {
    const { lrn, newPassword } = req.body;

    const student = await Student.findById(lrn);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    student.password = hashedPassword;
    await student.save();

    res
      .status(200)
      .json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error changing password",
      error: error.message,
    });
  }
};

export const adminForgotPassword = async (req, res) => {
  try {
    const { employeeNumber } = req.body;

    const admin = await Admin.findOne({ employeeNumber });
    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    }

    const existingRequest = await PassRequestAdminModel.findOne({
      adminId: admin._id,
      status: "pending",
    });

    if (existingRequest) {
      return res
        .status(400)
        .json({ success: false, message: "Request already pending" });
    }

    await PassRequestAdminModel.create({ adminId: admin._id });

    res.status(200).json({
      success: true,
      message: "Password reset request submitted. Admin will handle it.",
    });
  } catch (error) {
    console.error("Error in studentForgotPassword:", error);
    res.status(500).json({
      success: false,
      message: "Error processing request",
      error: error.message,
    });
  }
};

export const studentForgotPassword = async (req, res) => {
  try {
    const { lrn } = req.body;

    const student = await Student.findOne({ lrn });
    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }

    const existingRequest = await PassRequestStudentModel.findOne({
      studentId: student._id,
      status: "pending",
    });

    if (existingRequest) {
      return res
        .status(400)
        .json({ success: false, message: "Request already pending" });
    }

    await PasswordResetRequest.create({ studentId: student._id });

    res.status(200).json({
      success: true,
      message: "Password reset request submitted. Admin will handle it.",
    });
  } catch (error) {
    console.error("Error in studentForgotPassword:", error);
    res.status(500).json({
      success: false,
      message: "Error processing request",
      error: error.message,
    });
  }
};

export const superAdminSetNewPasswordAdmin = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { newPassword } = req.body;

    const resetRequest = await PassRequestAdminModel.findById(requestId);
    if (!resetRequest || resetRequest.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "Invalid or already processed request",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await Admin.findByIdAndUpdate(resetRequest.adminId, {
      password: hashedPassword,
    });

    await PassRequestAdminModel.findByIdAndDelete(requestId);

    res.status(200).json({
      success: true,
      message: "Password reset successful. Request deleted.",
    });
  } catch (error) {
    console.error("Error in superAdminSetNewPasswordAdmin:", error);
    res.status(500).json({
      success: false,
      message: "Error processing password reset",
      error: error.message,
    });
  }
};

export const superAdminSetNewPasswordStudent = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { newPassword } = req.body;

    const resetRequest = await PassRequestStudentModel.findById(requestId);
    if (!resetRequest || resetRequest.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "Invalid or already processed request",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await Student.findByIdAndUpdate(resetRequest.studentId, {
      password: hashedPassword,
    });

    await PassRequestStudentModel.findByIdAndDelete(requestId);

    res.status(200).json({
      success: true,
      message: "Password reset successful. New password set by admin.",
    });
  } catch (error) {
    console.error("Error in adminSetNewPassword:", error);
    res.status(500).json({
      success: false,
      message: "Error processing password reset",
      error: error.message,
    });
  }
};

export const getAllAdminRequestPassword = async (req, res) => {
  try {
    const requests = await PassRequestAdminModel.find({ status: "pending" });
    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    console.error("Error in getAllAdminRequestPassword:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching password reset requests",
      error: error.message,
    });
  }
};

export const getAllStudentRequestPassword = async (req, res) => {
  try {
    const requests = await PassRequestStudentModel.find({ status: "pending" });
    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    console.error("Error in getAllStudentRequestPassword:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching password reset requests",
      error: error.message,
    });
  }
};
