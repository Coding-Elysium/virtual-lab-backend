import mongoose from "mongoose";

const actionSchema = new mongoose.Schema(
  {
    action:{
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true
    }
  },
  { _id: false }
)


const ingredientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    action: {
      type: [actionSchema],
      required: true,
    }
  },
  { _id: false }
)

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
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    ingredients: {
      type: [ingredientsSchema],
      required: true,
    }
  }
)

const Coc = mongoose.model("Coc", cocSchema);
export default Coc;