import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false } 
);

const inventorySchema = new mongoose.Schema(
  {
    take: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['coc1', 'coc2', 'coc3'],
      required: true
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    ingredients: {
      type: [itemSchema],
      required: true,
    },
  },
  { collection: "inventory" }
);

const Inventory = mongoose.model("Inventory", inventorySchema);

export default Inventory;
