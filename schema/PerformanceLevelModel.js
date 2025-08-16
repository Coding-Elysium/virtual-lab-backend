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

function calculateScores(doc) {
  const scores = [
    doc.useTools,
    doc.procedure,
    doc.safety,
    doc.product,
    doc.timeManagement,
    doc.properBalance,
    doc.useOfColor,
    doc.shape,
    doc.useOfGarnish,
    doc.overallPresentation,
  ];

  const total = scores.reduce((sum, val) => sum + val, 0);
  const avg = total / scores.length;

  doc.averageScore = parseFloat(avg.toFixed(2));
  doc.starRating = avg >= 4 ? 3 : avg >= 2.5 ? 2 : 1;
}

performanceSchema.pre("save", function (next) {
  calculateScores(this);
  next();
});

performanceSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();

  const target = update.$set || update;

  if (
    target.useTools !== undefined ||
    target.procedure !== undefined ||
    target.safety !== undefined ||
    target.product !== undefined ||
    target.timeManagement !== undefined ||
    target.properBalance !== undefined ||
    target.useOfColor !== undefined ||
    target.shape !== undefined ||
    target.useOfGarnish !== undefined ||
    target.overallPresentation !== undefined
  ) {
    calculateScores(target);
  }

  next();
});

const Performance = mongoose.model("Performance", performanceSchema);

export default Performance;
