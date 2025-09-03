import mongoose from "mongoose";

const actionToolsSchema = new mongoose.Schema(
  {
    tools: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const ActionToolsModel = mongoose.model("ActionTools", actionToolsSchema);

export default ActionToolsModel;
