import mongoose from "mongoose";
import Performance from "../schema/PerformanceLevelModel.js";

export const createPerformance = async (req, res) => {
  try {
    const performance = new Performance(req.body);
    await performance.save();
    res.status(201).json(performance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPerformance = async (req, res) => {
  try {
    const { type } = req.query;
    const { studentId } = req.params;

    if (!studentId || !type) {
      return res
        .status(400)
        .json({ message: "studentId and type are required" });
    }

    if (!mongoose.Types.ObjectId.isValid(studentId)) {
      return res.status(400).json({ message: "Invalid studentId" });
    }

    const performance = await Performance.findOne({ studentId, type });

    if (!performance) {
      return res.status(404).json({ message: "Performance not found" });
    }

    res.status(200).json(performance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
