import mongoose from "mongoose";
import { capitalizeWords } from "../helpers/helpers.js";

const platingSchema = new mongoose.Schema(
  {
    lrn: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { collection: "plating" }
);

platingSchema.pre("save", function (next) {
  if (this.firstName) this.firstName = capitalizeWords(this.firstName);
  if (this.lastName) this.lastName = capitalizeWords(this.lastName);
  if (this.email) this.email = this.email.toLowerCase();
  if (this.gradeLevel) this.gradeLevel = capitalizeWords(this.gradeLevel);
  if (this.status) this.status = capitalizeWords(this.status);
  if (this.gender) this.gender = capitalizeWords(this.gender);

  next();
});

const Plating = mongoose.model("Student", studentSchema);

export default Plating;
