import mongoose from "mongoose";

const stageSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  coc1: {
    type: String,
    enum: ["pending", "complete"],
    default: "pending",
  },
  coc2: {
    type: String,
    enum: ["pending", "complete"],
    default: "pending",
  },
  coc3: {
    type: String,
    enum: ["pending", "complete"],
    default: "pending",
  },
});

const Stage = mongoose.model("Stage", stageSchema);
export default Stage;
