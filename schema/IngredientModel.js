import mongoose from "mongoose";
import { capitalizeWords } from "../helpers/helpers.js";

const IngredientSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

IngredientSchema.pre("save", function (next) {
  if (this.name) this.name = capitalizeWords(this.name);

  next();
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

export default Ingredient;
