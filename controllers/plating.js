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