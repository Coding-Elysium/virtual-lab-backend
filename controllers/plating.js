import Plating from "../schema/PlatingModel.js";
import Stage from "../schema/StageSchema.js";

export const addPlating = async (req, res) => {
  try {
    const { image, studentId, type } = req.body;

    const allowedTypes = ["coc1", "coc2", "coc3"];
    if (!allowedTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message: `Invalid type "${type}". Must be one of ${allowedTypes.join(
          ", "
        )}.`,
      });
    }

    const existingPlating = await Plating.findOne({ type, studentId });
    if (existingPlating) {
      return res.status(400).json({
        success: false,
        message: `Your plating for "${type}" has already been submitted.`,
      });
    }

    const platingData = new Plating({ image, studentId, type });
    await platingData.save();

    const stageData = await Stage.findOneAndUpdate(
      { studentId },
      { [type]: "complete" },
      { new: true }
    );

    if (!stageData) {
      return res.status(404).json({
        success: false,
        message: "Stage data not found for this student",
      });
    }

    res.status(201).json({
      success: true,
      message: `Successfully added a plating to ${type} and marked stage as complete`,
      updatedStage: stageData,
    });
  } catch (error) {
    console.error("Error adding plating:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const getPlating = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { type } = req.query;

    const query = { studentId };
    if (type) {
      query.type = type;
    }

    const result = await Plating.find(query);

    res.status(200).json({
      success: true,
      message: "Successfully retrieved plating data",
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
