import mongoose from "mongoose";

const performanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  type: {
    enum: ["coc1", "coc2", "coc3"],
    type: String,
    required: true,
  },
  dimension: {
    useTools: {
      type: Number,
      min: 0,
      max: 4,
      required: true,
    },
    procedure: {
      type: Number,
      min: 0,
      max: 4,
      required: true,
    },
    safety: {
      type: Number,
      min: 0,
      max: 4,
      required: true,
    },
    product: {
      type: Number,
      min: 0,
      max: 4,
      required: true,
    },
    timeManagement: {
      type: Number,
      min: 0,
      max: 4,
      required: true,
    },
    totalScore: {
      type: Number,
      required: true,
    },
  },
  criteria: {
    properBalance: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    useOfColor: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    shape: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    useOfGarnish: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    overallPresentation: {
      type: Number,
      min: 0,
      max: 5,
      required: true,
    },
    totalScore: {
      type: Number,
      required: true,
    },
  },
});

performanceSchema.pre("save", function (next) {
  const c = this.criteria;
  const d = this.dimension;

  c.totalScore =
    c.properBalance +
    c.useOfColor +
    c.shape +
    c.useOfGarnish +
    c.overallPresentation;

  d.totalScore =
    d.useTools + d.procedure + d.safety + d.product + d.timeManagement;

  next();
});

const Performance = mongoose.model("Performance", performanceSchema);

export default Performance;
