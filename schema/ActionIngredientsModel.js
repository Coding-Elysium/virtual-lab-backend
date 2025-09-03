import mongoose from "mongoose";
import { capitalizeWords } from "../helpers/helpers.js";

const ingredientsActionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "actioningredients" }
);

const IngredientActionModel = mongoose.model(
  "IngredientsAction",
  ingredientsActionSchema
);

export default IngredientActionModel;
