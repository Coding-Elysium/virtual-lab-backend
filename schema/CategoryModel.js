import mongoose from "mongoose";
import { capitalizeWords } from "../helpers/helpers.js";

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "category" }
);

categorySchema.pre("save", function (next) {
  if (this.category) this.category = capitalizeWords(this.category);

  next();
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
