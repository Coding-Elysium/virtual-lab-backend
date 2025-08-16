import Stage from "../schema/StageSchema.js";

export const stageController = async (req, res) => {
  try {
    const { studentId } = req.params;

    const stageData = await Stage.findOne({ studentId });
    if (!stageData) {
      return res.status(404).json({
        success: false,
        message: "Stage data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully retrieved stage data",
      data: stageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
