import mongoose from "mongoose";
import { capitalizeWords } from "../helpers/helpers.js";

const studentSchema = new mongoose.Schema(
  {
    lrn: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    gender: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gradeLevel: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
  },
  { collection: "students" }
);

studentSchema.pre("save", function (next) {
  if (this.firstName) this.firstName = capitalizeWords(this.firstName);
  if (this.lastName) this.lastName = capitalizeWords(this.lastName);
  if (this.email) this.email = this.email.toLowerCase();
  if (this.gradeLevel) this.gradeLevel = capitalizeWords(this.gradeLevel);
  if (this.status) this.status = capitalizeWords(this.status);
  if (this.gender) this.gender = capitalizeWords(this.gender);

  next();
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
