import Ingredient from "../schema/IngredientModel.js";
import cloudinary from "../utils/cloudinary.js";

export const addIngredients = async (req, res) => {
  try {
    const { type, category, name, actions } = req.body;

    if (!type || !category || !name) {
      return res.status(400).json({
        success: false,
        message: "Type, category, and name are required",
      });
    }

    let imageUrl = null;

    if (req.file && req.file.path) {
      const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
        folder: "ingredients",
      });
      imageUrl = uploadResponse.secure_url;
    }

    const ingredient = await Ingredient.create({
      type,
      category,
      name,
      actions,
      image: imageUrl,
    });

    res.status(201).json({
      success: true,
      message: "Successfully added ingredient",
      data: ingredient,
    });
  } catch (error) {
    console.error("Error adding ingredient:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
