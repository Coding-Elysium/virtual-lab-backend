import Admin from "../schema/AdminModel.js";
import bcrypt from "bcrypt";

export const createAdmin = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      subject,
      employeeNumber,
      position,
      gender,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !subject ||
      !employeeNumber ||
      !position ||
      !gender
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(409).json({ message: "Admin already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      subject,
      employeeNumber,
      position,
      gender,
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
