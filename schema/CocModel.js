import mongoose from "mongoose";
import { capitalizeWords } from "../helpers/helpers.js";

const categoryEnumByType = {
  coc1: ["soup", "main dish", "vegetable side dish", "starch", "sauce"],
  coc2: ["appetizer", "salad", "sandwich"],
  coc3: ["dessert"],
};

const cocSchema = new mongoose.Schema(
  {
    imageFood: {
      type: String,
      required: true,
    },
    typeOfExam: {
      type: String,
      enum: ["coc1", "coc2", "coc3"],
      required: true,
    },
    category: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          const allowed = categoryEnumByType[this.typeOfExam?.toLowerCase()];
          return allowed ? allowed.includes(value.toLowerCase()) : false;
        },
        message: (props) =>
          `Category ${props.value} is not in the type of Exam.`,
      },
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    tools: [
      {
        name: { type: String, required: true },
        usage: { type: String, required: true },
      },
    ],
    procedure: {
      type: [String],
    },
    isWellCooked: {
      type: Boolean,
      required: true,
    },
    time: {
      start: {
        type: Date,
        required: true,
      },
      end: {
        type: Date,
        required: true,
      },
    },
  },
  { collection: "exam" }
);

cocSchema.pre("save", function (next) {
  if (this.typeOfExam) this.typeOfExam = this.typeOfExam.toLowerCase();
  if (this.category) this.category = this.category.toLowerCase();

  if (this.ingredients && Array.isArray(this.ingredients)) {
    this.ingredients = this.ingredients.map((item) =>
      capitalizeWords(item.trim())
    );
  }
  if (this.tools && Array.isArray(this.tools)) {
    this.tools = this.tools.map((tool) => ({
      name: capitalizeWords(tool.name.trim()),
      usage: capitalizeWords(tool.usage.trim()),
    }));
  }
  if (this.procedure && Array.isArray(this.procedure)) {
    this.procedure = this.procedure.map(
      (step) => step.charAt(0).toUpperCase() + step.slice(1)
    );
  }

  next();
});

const Coc = mongoose.model("Coc", cocSchema);
export default Coc;
