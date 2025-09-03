import mongoose from "mongoose";
import { capitalizeWords } from "../helpers/helpers.js";

const ingredientsActionSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "admin" }
);

const ingredientsAction = mongoose.model("IngredientsAction", ingredientsActionSchema);

export default ingredientsAction;
