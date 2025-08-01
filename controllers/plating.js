import Plating from "../schema/PlatingModel.js"

export const addPlating = async(req, res) => {
    try {
        const { image, studentId, type } = req.body;
        const platingData = new Plating ({
            image,
            studentId,
            type,
        });
            
        await platingData.save();
        
        res.status(201).json({success: true, message: "Successfully add a plating" });
    } catch (error) {
        res.status(500).json({success:false, message: "Server error", error: error.message });
    }
}

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
            result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
};
