import mongoose from "mongoose";
import { capitalizeWords } from "../helpers/helpers.js";

const CommonIngredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

CommonIngredientSchema.pre("save", function (next) {
  if (this.name) this.name = capitalizeWords(this.name);

  next();
});

const CommonIngredientModel = mongoose.model("CommonIngredients", CommonIngredientSchema);

export default CommonIngredientModel;
