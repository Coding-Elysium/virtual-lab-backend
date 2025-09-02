import Ingredient from "../schema/IngredientModel.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const addIngredients = async (req, res) => {
  try {
    const { type, category, image, name, actions } = req.body;

    if (!type || !category || !name) {
      return res.status(400).json({
        success: false,
        message: "Type, category, and name are required",
      });
    }

    let imageUrl = null;

    if (image) {
      const uploadResponse = await cloudinary.v2.uploader.upload(image, {
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


export const getIngredients = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}