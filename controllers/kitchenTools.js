import KitchenTools from "../schema/KitchenToolsModel.js";
import cloudinary from "../utils/cloudinary.js";

export const addKitchenTools = async (req, res) => {
  try {
    const { name, actions } = req.body;

    if (!name || !Array.isArray(actions)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Input",
      });
    }

    // Convert ["bake","roast"] → [{action:"bake"}, {action:"roast"}]
    const formattedActions = actions.map(a => ({ action: a }));

    let imageUrl = null;

    if (req.file && req.file.path) {
      const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
        folder: `kitchen-tools`,
      });
      imageUrl = uploadResponse.secure_url;
    }

    const tool = new KitchenTools({
      name,
      actions: formattedActions,
      image: imageUrl,
    });

    await tool.save();

    res.status(200).json({
      success: true,
      message: "Kitchen Tools added successfully",
      data: tool,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const readKitchenTools = async (req, res) => {
  try {
    const tools = await KitchenTools.find();

    // Normalize actions → always return [{action:"..."}]
    const formattedTools = tools.map(tool => {
      const formattedActions = tool.actions.map(a =>
        typeof a === "string" ? { action: a } : a
      );

      return {
        ...tool._doc, // spread original mongoose document
        actions: formattedActions,
      };
    });

    res.status(200).json({
      success: true,
      message: "Kitchen Tools Successfully Read",
      data: formattedTools,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
