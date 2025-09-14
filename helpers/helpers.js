import Coc from "../schema/CocModel.js";
import { VALID_ACTION_INGREDIENTS } from "../utils/cloudinary.js";

export const capitalizeWords = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

export const validateTypeAndCategory = (type, category) => {
  const allowedTypes = {
    coc1: ["mainDish", "sauce", "soup"],
    coc2: ["appetizer", "sandwich", "saladAndSaladDress"],
    coc3: ["hotDessert", "coldDessert"],
  };

  if (!allowedTypes[type]) {
    return { valid: false, message: `Invalid type "${type}".` };
  }

  if (!allowedTypes[type].includes(category)) {
    return {
      valid: false,
      message: `Invalid category "${category}" for type "${type}". Must be one of ${allowedTypes[
        type
      ].join(", ")}.`,
    };
  }

  return { valid: true };
};

export const validateSubmissionLimit = async (studentId, category) => {
  const count = await Coc.countDocuments({ studentId, category });

  if (category === "mainDish" && count >= 3) {
    return {
      valid: false,
      message: `You have already submitted 3 dishes for "${category}".`,
    };
  }
  if (category !== "mainDish" && count >= 1) {
    return {
      valid: false,
      message: `You have already submitted a dish for "${category}". Only one is allowed.`,
    };
  }

  return { valid: true };
};

// export const validateProcedures = (procedureSteps, ingredients) => {
//   const invalidReasons = [];
//   let procedureStatus = "valid";

//   if (!Array.isArray(ingredients) || ingredients.length === 0) {
//     return {
//       status: "inappropriate",
//       reasons: ["Ingredients list is missing or empty."],
//     };
//   }

//   procedureSteps.forEach((step, stepIndex) => {
//     let stepHasError = false;

//     step.ingredients.forEach((ingName) => {
//       const normalizedIng = ingName.trim().toLowerCase();
//       const ingredientData = ingredients.find(
//         (ing) => ing.name.trim().toLowerCase() === normalizedIng
//       );

//       if (!ingredientData) {
//         procedureStatus = "inappropriate";
//         invalidReasons.push(
//           `Step ${
//             stepIndex + 1
//           }: Ingredient "${ingName}" is not listed in the provided ingredients.`
//         );
//         stepHasError = true;
//         return;
//       }

//       // Find if this ingredient allows this action
//       const matchingAction = ingredientData.actions.find(
//         (a) =>
//           a.action.toLowerCase() === step.action.toLowerCase() &&
//           (!step.tool || a.tool.toLowerCase() === step.tool.toLowerCase())
//       );

//       if (!matchingAction) {
//         procedureStatus = "inappropriate";
//         invalidReasons.push(
//           `Step ${stepIndex + 1}: Action "${step.action}" with tool "${
//             step.tool
//           }" is not valid for ingredient "${ingName}".`
//         );
//         stepHasError = true;
//         return;
//       }

//       // Check status
//       if (
//         step.status &&
//         matchingAction.status.toLowerCase() !== step.status.toLowerCase()
//       ) {
//         procedureStatus = "inappropriate";
//         invalidReasons.push(
//           `Step ${stepIndex + 1}: Status "${
//             step.status
//           }" does not match expected "${
//             matchingAction.status
//           }" for "${ingName}".`
//         );
//         stepHasError = true;
//       }
//     });

//     if (!stepHasError) {
//       const ingList = step.ingredients.map((ing) => `"${ing}"`).join(", ");
//       invalidReasons.push(
//         `✅ Step ${stepIndex + 1}: "${step.action}" on ${ingList} using "${
//           step.tool
//         }" → status "${step.status}".`
//       );
//     }
//   });

//   return { status: procedureStatus, reasons: invalidReasons };
// };

export const validateIngredients = (ingredients = []) => {
  const invalidReasons = [];
  let procedureStatus = "valid";

  if (!VALID_ACTION_INGREDIENTS || !VALID_ACTION_INGREDIENTS.ingredients) {
    return {
      status: "inappropriate",
      reasons: ["VALID_ACTION_INGREDIENTS.ingredients is not defined."],
    };
  }

  ingredients.forEach((ingredient, ingIndex) => {
    const ingName = ingredient.name?.trim().toLowerCase();
    const rules = VALID_ACTION_INGREDIENTS.ingredients[ingName];

    if (!rules) {
      procedureStatus = "inappropriate";
      invalidReasons.push(
        `Ingredient "${ingredient.name}" (index ${ingIndex}) is not in the list of valid ingredients.`
      );
      return;
    }

    if (!ingredient.actions || !Array.isArray(ingredient.actions)) {
      procedureStatus = "inappropriate";
      invalidReasons.push(
        `Ingredient "${ingredient.name}" has no valid actions array.`
      );
      return;
    }

    ingredient.actions.forEach((actionObj, actionIndex) => {
      const action = actionObj.action?.toLowerCase();
      const tool = actionObj.tool?.toLowerCase();

      if (!rules[action]) {
        procedureStatus = "inappropriate";
        invalidReasons.push(
          `Action "${action}" is not valid for ingredient "${ingredient.name}".`
        );
        return;
      }

      if (!rules[action].includes(tool)) {
        procedureStatus = "inappropriate";
        invalidReasons.push(
          `Tool "${tool}" is not valid for action "${action}" on ingredient "${ingredient.name}".`
        );
        return;
      }

      invalidReasons.push(
        `✅ Ingredient "${ingredient.name}" → action "${action}" with tool "${tool}" is valid.`
      );
    });
  });

  return {
    status: procedureStatus,
    reasons: invalidReasons,
  };
};
