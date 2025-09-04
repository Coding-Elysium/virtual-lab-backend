import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
    }
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
      enum: ["coc1", "coc2", "coc3"],
      required: true,
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
    startDate: {
      type: Date,
      required: true,
      default: Date.now,
    }
  },
  { collection: "inventory" }
);

const Inventory = mongoose.model("Inventory", inventorySchema);

export default Inventory;

// {
//     "take": "take_one",
//     "type": "coc1",
//     "studentId": "studentId",
//     "ingredients": [
//       {
//         "path": "/documents/coc1/form1.png",
//         "name": "chicken"
//       },
//       {
//         "path": "/documents/coc1/receipt1.jpg",
//         "name": "pork"
//       }
//     ]
//   },

//   BASEURL/inventory/create
//   BASEURL/read/${studentId}/?type=coc1&take=take_one
