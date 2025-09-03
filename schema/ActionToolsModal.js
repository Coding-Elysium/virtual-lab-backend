import mongoose from "mongoose";

const actionToolsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    tools: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const ActionTools = mongoose.model("ActionTools", actionToolsSchema);

export default ActionTools;
