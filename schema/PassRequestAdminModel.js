import mongoose from "mongoose";

const passwordResetRequestSchemaAdmin = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
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

const PassRequestAdminModel = mongoose.model(
  "PassRequestAdminModel",
  passwordResetRequestSchemaAdmin
);

export default PassRequestAdminModel;
