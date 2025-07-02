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
    const performance = await Performance.findOne({
      studentId: req.params.studentId,
      cocId: req.params.cocId,
    });

    if (!performance) {
      return res.status(404).json({ message: "Performance record not found" });
    }

    res.status(200).json(performance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
