import Coc from "../schema/CocModel.js";
import { VALID_PROCEDURES } from "../utils/cloudinary.js";

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
      message: `Invalid category "${category}" for type "${type}". Must be one of ${allowedTypes[type].join(", ")}.`,
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

export const validateProcedures = (category, procedureSteps, equipments) => {
  const rules = VALID_PROCEDURES[category];
  const invalidReasons = [];
  let procedureStatus = "valid";

  if (!rules) {
    return {
      status: "inappropriate",
      reasons: [`Category "${category}" is not in the valid procedures list.`],
    };
  }

  procedureSteps.forEach((step, stepIndex) => {
    step.ingredients.forEach((ingName) => {
      const normalizedIng = ingName.toLowerCase();
      const allowedIngredient = rules.ingredients[normalizedIng];

      if (!allowedIngredient) {
        procedureStatus = "inappropriate";
        invalidReasons.push(
          `Step ${stepIndex + 1}: Ingredient "${ingName}" is not allowed in "${category}".`
        );
        return;
      }

      const allowedTools = allowedIngredient[step.action];
      if (!allowedTools) {
        procedureStatus = "inappropriate";
        invalidReasons.push(
          `Step ${stepIndex + 1}: Action "${step.action}" is not valid for "${ingName}".`
        );
      } else if (step.tool && !allowedTools.includes(step.tool)) {
        procedureStatus = "inappropriate";
        invalidReasons.push(
          `Step ${stepIndex + 1}: Tool "${step.tool}" is not valid for action "${step.action}" on "${ingName}".`
        );
      }
    });
  });

  equipments.forEach((eq) => {
    if (!rules.equipments.includes(eq.name)) {
      procedureStatus = "inappropriate";
      invalidReasons.push(`Equipment "${eq.name}" is not allowed in "${category}".`);
    }
  });

  return { status: procedureStatus, reasons: invalidReasons };
};