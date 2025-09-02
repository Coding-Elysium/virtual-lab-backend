import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    // categoryId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    //   required: true,
    // },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    actions: {
      type: [String], 
      default: [],
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

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

export default Ingredient;
