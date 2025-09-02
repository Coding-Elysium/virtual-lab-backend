import Ingredient from "../schema/IngredientModel.js";
import cloudinary from "../utils/cloudinary.js";

// export const addIngredients = async (req, res) => {
//   try {
//     const { type, category, image, name, actions } = req.body;

//     if (!type || !category || !name) {
//       return res.status(400).json({
//         success: false,
//         message: "Type, category, and name are required",
//       });
//     }

//     let imageUrl = null;

//     if (image) {
//       const uploadResponse = await cloudinary.uploader.upload(image, {
//         folder: "ingredients",
//       });
//       imageUrl = uploadResponse.secure_url;
//     }

//     const ingredient = await Ingredient.create({
//       type,
//       category,
//       name,
//       actions,
//       image: imageUrl,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Successfully added ingredient",
//       data: ingredient,
//     });
//   } catch (error) {
//     console.error("Error adding ingredient:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };




export const addIngredients = async(req, res) => {
  try {

      const sample = process.env.CLOUDINARY_CLOUD_NAME;
      // cloudinary.uploader.upload(req.file.path, function (err, result){
      // if(err) {
      //   console.log(err);
      //   return res.status(500).json({
      //     success: false,
      //     message: "Error"
      //   })
      // }

      return res.status(200).json({
        success: true,
        message:"Uploaded!",
        data: sample
      });
    // })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:"Not Uploaded!",
      error: error.message,
    })
  }
}