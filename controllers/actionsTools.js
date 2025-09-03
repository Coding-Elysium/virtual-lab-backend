import ActionTools from "../schema/ActionToolsModal";

export const getActionTools = async (req, res) => {
  try {
    const actions = await ActionTools.find();
    res.status(200).json({
      success: true,
      message: "Actions fetched successfully",
      data: actions,
    });
  } catch (error) {
    console.error("Error fetching actions:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
