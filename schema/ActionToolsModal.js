import mongoose from "mongoose";

const actionToolsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const ActionToolsModel = mongoose.model("ActionTools", actionToolsSchema);

export default ActionToolsModel;
