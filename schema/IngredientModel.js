import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
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

IngredientSchema.pre("save", function (next) {
  if (this.name) this.name = capitalizeWords(this.name);
  if (this.category) this.category = capitalizeWords(this.category);

  next();
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

export default Ingredient;
