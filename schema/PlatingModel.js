import mongoose from "mongoose";

const platingSchema = new mongoose.Schema(
  {
    image: {
        type: String,
        required: true,
    },
    endDate: {
        type: Date,
        default: Date.now,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    type: {
      type: String,
      enum: ["coc1", "coc2", "coc3"],
      required: true,
    },
  },
  { collection: "plating" }
);

const Plating = mongoose.model("Plating", platingSchema);

export default Plating;
