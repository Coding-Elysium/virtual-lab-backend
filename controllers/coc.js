import {
  validateProcedures,
  validateSubmissionLimit,
  validateTypeAndCategory,
} from "../helpers/helpers.js";
import Coc from "../schema/CocModel.js";
import { getMatchedCombination } from "../utils/cloudinary.js";

export const createDish = async (req, res) => {
  try {
    const {
      type,
      studentId,
      category,
      name,
      ingredients = [],
      equipments = [],
      procedureSteps = [],
    } = req.body;

    const typeCategoryCheck = validateTypeAndCategory(type, category);
    if (!typeCategoryCheck.valid) {
      return res
        .status(400)
        .json({ success: false, message: typeCategoryCheck.message });
    }

    const submissionCheck = await validateSubmissionLimit(studentId, category);
    if (!submissionCheck.valid) {
      return res
        .status(400)
        .json({ success: false, message: submissionCheck.message });
    }

    const { status: procedureStatus, reasons: invalidReasons } =
      validateProcedures(category, procedureSteps, equipments);

    const matchedCombo = getMatchedCombination(category, ingredients);

    const newCoc = new Coc({
      type,
      studentId,
      category,
      name,
      ingredients,
      equipments,
      procedureSteps,
      result: matchedCombo?.image || null,
      procedureStatus,
      equipments,
      invalidReasons,
    });

    await newCoc.save();

    return res.status(200).json({
      success: true,
      message:
        procedureStatus === "valid"
          ? "COC created successfully"
          : "COC created with inappropriate procedure",
      data: newCoc,
    });
  } catch (error) {
    console.error("Error creating COC:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// export const createDish = async (req, res) => {
//   try {
//     const {
//       type,
//       studentId,
//       category,
//       name,
//       ingredients = [],
//       equipments = [],
//     } = req.body;

//     // Validate type
//     const allowedTypes = ["coc1", "coc2", "coc3"];
//     if (!allowedTypes.includes(type)) {
//       return res.status(400).json({
//         success: false,
//         message: `Invalid type "${type}". Must be one of ${allowedTypes.join(", ")}.`,
//       });
//     }

//     // Determine allowed categories for type
//     let allowedCategory = [];
//     if (type === "coc1") {
//       allowedCategory = ["mainDish", "sauce", "soup"];
//     } else if (type === "coc2") {
//       allowedCategory = ["appetizer", "sandwich", "saladAndSaladDress"];
//     } else if (type === "coc3") {
//       allowedCategory = ["hotDessert", "coldDessert"];
//     }

//     // Validate category
//     if (!allowedCategory.includes(category)) {
//       return res.status(400).json({
//         success: false,
//         message: `Invalid category "${category}" for type "${type}". Must be one of ${allowedCategory.join(", ")}.`,
//       });
//     }

//     // ✅ Submission limit: max 3 per category per student
//     const existingCount = await Coc.countDocuments({
//       studentId,
//       category,
//     });

//     if (existingCount >= 3) {
//       return res.status(400).json({
//         success: false,
//         message: `You have already submitted 3 dishes for the category "${category}".`,
//       });
//     }

//     // Validate procedure
//     const rules = VALID_PROCEDURES[category];
//     let procedureStatus = "valid";
//     let invalidReasons = [];

//     if (!rules) {
//       procedureStatus = "inappropriate";
//       invalidReasons.push(`Category "${category}" is not in the valid procedures list.`);
//     } else {
//       for (const ing of ingredients) {
//         const allowedIngredient = rules.ingredients[ing.name.toLowerCase()];
//         if (!allowedIngredient) {
//           procedureStatus = "inappropriate";
//           invalidReasons.push(`Ingredient "${ing.name}" is not allowed for category "${category}".`);
//           continue;
//         }

//         for (const act of ing.actions || []) {
//           const allowedTools = allowedIngredient[act.action];
//           if (!allowedTools) {
//             procedureStatus = "inappropriate";
//             invalidReasons.push(`Invalid action "${act.action}" for ingredient "${ing.name}".`);
//           } else if (act.tool && !allowedTools.includes(act.tool)) {
//             procedureStatus = "inappropriate";
//             invalidReasons.push(`Tool "${act.tool}" is not valid for action "${act.action}" on "${ing.name}".`);
//           }
//         }
//       }

//       for (const eq of equipments) {
//         if (!rules.equipments.includes(eq.name)) {
//           procedureStatus = "inappropriate";
//           invalidReasons.push(`Equipment "${eq.name}" is not allowed for category "${category}".`);
//         }
//       }
//     }

//     const matchedCombo = getMatchedCombination(category, ingredients);

//     req.body.procedureStatus = procedureStatus;
//     req.body.invalidReasons = invalidReasons;
//     req.body.image = matchedCombo?.image || null;
//     req.body.name = matchedCombo?.name || name;

//     const newCoc = new Coc(req.body);
//     await newCoc.save();

//     res.status(200).json({
//       success: true,
//       message:
//         procedureStatus === "valid"
//           ? "COC created successfully"
//           : "COC created with inappropriate procedure",
//       data: newCoc,
//     });
//   } catch (error) {
//     console.error("Error creating COC:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

// export const createCoc = async (req, res) => {
//   try {
//     const {
//       type,
//       studentId,
//       category,
//       name,
//       ingredients = [],
//       equipments = [],
//     } = req.body;

//     const allowedTypes = ["coc1", "coc2", "coc3"];
//     if (!allowedTypes.includes(type)) {
//       return res.status(400).json({
//         success: false,
//         message: `Invalid type "${type}". Must be one of ${allowedTypes.join(", ")}.`,
//       });
//     }

//     let allowedCategory = [];
//     if (type === "coc1") {
//       allowedCategory = ["mainDish", "sauce", "soup"];
//     } else if (type === "coc2") {
//       allowedCategory = ["appetizer", "sandwich", "saladAndSaladDress"];
//     } else if (type === "coc3") {
//       allowedCategory = ["hotDessert", "coldDessert"];
//     }

//     if (!allowedCategory.includes(category)) {
//       return res.status(400).json({
//         success: false,
//         message: `Invalid category "${category}" for type "${type}". Must be one of ${allowedCategory.join(", ")}.`,
//       });
//     }

//     const existingCocs = await Coc.find({ type, category, studentId });

//     if (type === "coc1" && category === "mainDish") {
//       if (existingCocs.length >= 3) {
//         return res.status(400).json({
//           success: false,
//           message: `You can only submit up to 3 "mainDish" for ${type}.`,
//         });
//       }
//     } else {
//       if (existingCocs.length > 0) {
//         return res.status(400).json({
//           success: false,
//           message: `You have already submitted "${category}" for ${type}.`,
//         });
//       }
//     }

//     const rules = VALID_PROCEDURES[category];
//     let procedureStatus = "valid";
//     let invalidReasons = [];

//     if (!rules) {
//       procedureStatus = "inappropriate";
//       invalidReasons.push(`Category "${category}" is not in the valid procedures list.`);
//     } else {
//       for (const ing of ingredients) {
//         const allowedIngredient = rules.ingredients[ing.name.toLowerCase()];
//         if (!allowedIngredient) {
//           procedureStatus = "inappropriate";
//           invalidReasons.push(`Ingredient "${ing.name}" is not allowed for category "${category}".`);
//           continue;
//         }

//         for (const act of ing.actions || []) {
//           const allowedTools = allowedIngredient[act.action];
//           if (!allowedTools) {
//             procedureStatus = "inappropriate";
//             invalidReasons.push(`Invalid action "${act.action}" for ingredient "${ing.name}".`);
//           } else if (act.tool && !allowedTools.includes(act.tool)) {
//             procedureStatus = "inappropriate";
//             invalidReasons.push(
//               `Tool "${act.tool}" is not valid for action "${act.action}" on "${ing.name}".`
//             );
//           }
//         }
//       }

//       for (const eq of equipments) {
//         if (!rules.equipments.includes(eq.name)) {
//           procedureStatus = "inappropriate";
//           invalidReasons.push(
//             `Equipment "${eq.name}" is not allowed for category "${category}".`
//           );
//         }
//       }
//     }

//     const matchedCombo = getMatchedCombination(category, ingredients);

//     req.body.procedureStatus = procedureStatus;
//     req.body.invalidReasons = invalidReasons;
//     req.body.image = matchedCombo?.image || null;
//     req.body.name = matchedCombo?.name || name;

//     const newCoc = new Coc(req.body);
//     await newCoc.save();

//     res.status(200).json({
//       success: true,
//       message:
//         procedureStatus === "valid"
//           ? "COC created successfully"
//           : "COC created with inappropriate procedure",
//       data: newCoc,
//       matchedImage: matchedCombo?.image || "No matching dish found",
//     });
//   } catch (error) {
//     console.error("Error creating COC:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

export const getStudentCoc = async (req, res) => {
  try {
    const { type } = req.query;

    const query = { studentId: req.params.studentId };

    if (type) {
      query.type = type;
    }

    const cocs = await Coc.find(query);

    if (!cocs || cocs.length === 0) {
      return res
        .status(404)
        .json({ message: "No COC records found for this student." });
    }

    res.status(200).json({
      success: true,
      message: "COC record(s) fetched successfully",
      data: cocs,
    });
  } catch (error) {
    console.error("Error fetching COC records:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
