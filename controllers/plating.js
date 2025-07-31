import Plating from "../schema/PlatingModel"

export const addPlating = async(req, res) => {
    try {
        const { image, endDate, studentId, type } = req.body;
        const platingData = new Plating ({
            image,
            endDate,
            studentId,
            type,
        });
            
        await platingData.save();
        
    res.status(201).json({success: true, message: "Successfully add plating", admin: adminData });
    } catch (error) {
        res.status(500).json({success:false, message: "Server error", error: error.message });
    }
}