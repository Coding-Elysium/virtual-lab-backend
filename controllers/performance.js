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
