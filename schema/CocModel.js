import mongoose from "mongoose";

// // Action performed on ingredients
// const actionSchema = new mongoose.Schema(
//   {
//     action: {
//       type: String,
//       required: true,
//     },
//     status: {
//       type: String,
//       required: true,
//     },
//     tool: {
//       type: String,
//       required: false, // Some tools can be empty string in your data
//     },
//   },
//   { _id: false }
// );

// // "Used" — e.g., used Freezer or Grill with specific actions
// const usedActionSchema = new mongoose.Schema(
//   {
//     action: {
//       type: String,
//       required: true,
//     },
//     status: {
//       type: String,
//       required: true,
//     },
//     tool: {
//       type: String,
//       required: false,
//     },
//   },
//   { _id: false }
// );

// const usedSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     actions: {
//       type: [usedActionSchema],
//       required: true,
//     },
//   },
//   { _id: false }
// );

// // Full ingredient schema with image, category, actions, and used
// const ingredientSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     actions: {
//       type: [actionSchema],
//       required: true,
//     },
//     used: {
//       type: usedSchema,
//       required: false,
//     },
//   },
//   { _id: false }
// );

// // Equipment schema
// const equipmentSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//   },
//   { _id: false }
// );

// // Main COC schema
// const cocSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   studentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Student",
//     required: true,
//   },
//   ingredients: {
//     type: [ingredientSchema],
//     required: true,
//   },
//   equipments: {
//     type: [equipmentSchema],
//     required: true,
//   },
//   procedureStatus: {
//     type: String,
//     enum: ["valid", "inappropriate"],
//     default: "valid",
//   },
//   invalidReasons: {
//     type: [String],
//     default: [],
//   },
//    procedureSteps: {
//     type: [
//       {
//         ingredients: [String],
//         action: String,
//         tool: String,
//         status: String,
//       },
//     ],
//     default: [],
//   },
// });

// const Coc = mongoose.model("Coc", cocSchema);
// export default Coc;

const actionSchema = new mongoose.Schema(
  {
    tools: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    actions: {
      type: [actionSchema],
      required: true,
    },
  },
  { _id: false }
);

const procedureStepsSchema = new mongoose.Schema(
  {
    ingredients: {
      type: [String],
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    tool: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const cocSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    ingredients: {
      type: [ingredientSchema],
      required: true,
    },
    procedureSteps: {
      type: [procedureStepsSchema],
      required: true,
    },
    invalidReasons: {
      type: [String],
      default: [],
    },
    equipment: {
      type: [String],
      required: true,
    },
    result: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Coc = mongoose.model("Coc", cocSchema);

export default Coc;
