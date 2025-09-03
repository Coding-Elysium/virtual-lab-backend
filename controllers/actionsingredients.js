import IngredientsAction from "../schema/ActionIngredientsModel.js"

export const createAction = async(req, res) => {
    try {
        const { action } = req.body;

        await IngredientsAction.create({
            action,
        });

        res.status(200).json({
            success: true,
            message: "Successfully added action to ingredients",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
}

export const getAction = async(req, res) => {
    try {
        const ingredientsData = await IngredientsAction.find();

        res.status(200).json({
            success: true,
            message: "Successfully added action to ingredients",
            data: ingredientsData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
}