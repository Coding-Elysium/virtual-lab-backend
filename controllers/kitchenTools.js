import KitchenTools from "../schema/KitchenToolsModel.js";

export const addKitchenTools = async(req, res) => {
    try { 
        const { name, actions } = req.body;

        if(!name || !Array.isArray(actions)){
            res.status(400).json({
                success: false,
                message: "Invalid Input",
            });
        }

        let imageUrl = null;

        if (req.file && req.file.path) {
            const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
                folder: `kitchen-tools`,
            });
            imageUrl = uploadResponse.secure_url;
        }

        const tool = new KitchenTools({
            name,
            actions,
            image: imageUrl
        })

        
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
}