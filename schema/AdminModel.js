import mongoose from "mongoose";
import { capitalizeWords } from "../helpers/helpers.js";

const adminSchema = new mongoose.Schema(
  {
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
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    employeeNumber: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { collection: "admins" }
);

adminSchema.pre("save", function (next) {
  if (this.firstName) this.firstName = capitalizeWords(this.firstName);
  if (this.lastName) this.lastName = capitalizeWords(this.lastName);
  if (this.subject) this.subject = capitalizeWords(this.subject);
  if (this.position) this.position = capitalizeWords(this.position);
  if (this.gender) this.gender = capitalizeWords(this.gender);
  if (this.email) this.email = this.email.toLowerCase();

  next();
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
