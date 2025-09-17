import CommonIngredients from "../schema/CommonIngredientsModel.js"
import cloudinary from "../utils/cloudinary.js";

export const addCommonIngredients = async(req, res) => {
    try {
        const { name } = req.body;

        let imageUrl = null;

        if(req.file && req.file.path){
            const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
                folder: `common-ingredients/`,
            })
            imageUrl = uploadResponse.secure_url;
        }

        const commonIngredient = await CommonIngredients.create({
            name,
            image: imageUrl,
        });
 
        res.status(201).json({
            success: true,
            message: `Success added ${name}`,
            data: commonIngredient,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
}

export const getCommonIngredient = async(req, res) => {
    try {
        const commonIngredient = await CommonIngredients.find();

        if(!commonIngredient){
            res.status(404).json({
                success: false,
                message: `Not Found`,
            });
        }

        res.status(200).json({
            success: true,
            message: "Common Ingredient successfully fetch",
            data: commonIngredient,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
}