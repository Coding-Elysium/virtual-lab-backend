import mongoose from "mongoose";
import { capitalizeWords } from "../helpers/helpers.js";

const KitchenToolsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    actions: [
      {
        action: { type: String, required: true }
      }
    ],
    image: { type: String },
  },
  { timestamps: true }
);

KitchenToolsSchema.pre("save", function (next) {
    if (this.name) this.name = capitalizeWords(this.name);

    next();
});

const KitchenTools = mongoose.model("KitchenTools", KitchenToolsSchema);

export default KitchenTools;

