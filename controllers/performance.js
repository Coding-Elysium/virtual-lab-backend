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

    res.status(200).json({
      success: true,
      message: "Performance retrieved successfully",
      data: performance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Performance retrieval failed",
      data: null,
      error: error.message,
    });
  }
};

export const updatePerformance = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const performance = await Performance.findOneAndUpdate(
      { _id: id },
      updates,
      { new: true }
    );

    if (!performance) {
      return res.status(404).json({ message: "Performance not found" });
    }

    res.status(200).json(performance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
