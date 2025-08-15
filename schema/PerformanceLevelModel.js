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
  useTools: { type: Number, min: 0, max: 4, required: true },
  procedure: { type: Number, min: 0, max: 4, required: true },
  safety: { type: Number, min: 0, max: 4, required: true },
  product: { type: Number, min: 0, max: 4, required: true },
  timeManagement: { type: Number, min: 0, max: 4, required: true },
  properBalance: { type: Number, min: 0, max: 5, required: true },
  useOfColor: { type: Number, min: 0, max: 5, required: true },
  shape: { type: Number, min: 0, max: 5, required: true },
  useOfGarnish: { type: Number, min: 0, max: 5, required: true },
  overallPresentation: { type: Number, min: 0, max: 5, required: true },
  comments: { type: String, default: "" },

  averageScore: { type: Number, default: 0 },
  starRating: { type: Number, default: 1 },
});

performanceSchema.pre("save", function (next) {
  const scores = [
    this.useTools,
    this.procedure,
    this.safety,
    this.product,
    this.timeManagement,
    this.properBalance,
    this.useOfColor,
    this.shape,
    this.useOfGarnish,
    this.overallPresentation,
  ];

  const total = scores.reduce((sum, val) => sum + val, 0);
  const avg = total / scores.length;

  this.averageScore = parseFloat(avg.toFixed(2));

  if (this.averageScore >= 4) {
    this.starRating = 3;
  } else if (this.averageScore >= 2.5) {
    this.starRating = 2;
  } else {
    this.starRating = 1;
  }

  next();
});

const Performance = mongoose.model("Performance", performanceSchema);

export default Performance;
