import mongoose from "mongoose";

const passwordResetRequestSchemaStudent = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    requestedAt: {
      type: Date,
      default: Date.now,
    },
    processedAt: {
      type: Date,
    },
    processedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true }
);

const PassRequestStudentModel = mongoose.model(
  "PassRequestStudentModel",
  passwordResetRequestSchemaStudent
);

export default PassRequestStudentModel;
