import Category from "../schema/CategoryModel.js";
import Ingredient from "../schema/IngredientModel.js";
import cloudinary from "../utils/cloudinary.js";

export const addIngredients = async (req, res) => {
  try {
    const { category, name } = req.body;

    if (!category || !name) {
      return res.status(400).json({
        success: false,
        message: "Type, category, and name are required",
      });
    }

    const categoryDoc = await Category.findById(category);

    if (!categoryDoc) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const categoryName = categoryDoc.category;

    let imageUrl = null;

    if (req.file && req.file.path) {
      const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
        folder: `ingredients/${categoryName}`,
      });
      imageUrl = uploadResponse.secure_url;
    }

    const ingredient = await Ingredient.create({
      category,
      name,
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

export const getIngredients = async (req, res) => {
  try {
    const { category } = req.query;

    const categoryDoc = await Category.findOne({ category: category });

    if (!categoryDoc) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const categoryId = categoryDoc._id;

    const ingredients = await Ingredient.find({ category: categoryId });

    res.status(200).json({
      success: true,
      message: "Ingredients fetched successfully",
      data: ingredients,
    });
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

