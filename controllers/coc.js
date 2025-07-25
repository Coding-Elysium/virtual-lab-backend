import { VALID_PROCEDURES } from "../helpers/helpers.js";
import Coc from "../schema/CocModel.js";


export const createCoc = async (req, res) => {
  try {
    const { category, ingredients, equipments } = req.body;
    const rules = VALID_PROCEDURES[category];

    let procedureStatus = "valid";
    let invalidReasons = [];

    if (!rules) {
      procedureStatus = "inappropriate";
      invalidReasons.push(`Not in category or valid procedure`);
    } else {
      for (const ing of ingredients) {
        if (!rules.ingredients[ing.name]) {
          procedureStatus = "inappropriate";
          invalidReasons.push(`Ingredient "${ing.name}" is not allowed.`);
        } else {
          for (const act of ing.actions) {
            const allowedActions = rules.ingredients[ing.name];
            if (!allowedActions || !allowedActions[act.actions]) {
              procedureStatus = "inappropriate";
              invalidReasons.push(`Invalid action "${act.action}" for "${ing.name}".`);
            } else if (act.tool && !allowedActions[act.action].includes(act.tool)) {
              procedureStatus = "inappropriate";
              invalidReasons.push(
                `Tool "${act.tool}" is not valid for action "${act.action}" on "${ing.name}".`
              );
            }
          }
        }
      }

      for (const eq of equipments) {
        if (!rules.equipments.includes(eq.name)) {
          procedureStatus = "inappropriate";
          invalidReasons.push(`Equipment "${eq.name}" is not allowed.`);
        }
      }
    }

    req.body.procedureStatus = procedureStatus;
    req.body.invalidReasons = invalidReasons;

    const newCoc = new Coc(req.body);
    await newCoc.save();

    res.status(200).json({
      success: true,
      message: procedureStatus === "valid"
        ? "COC created successfully"
        : "COC created with inappropriate procedure",
      data: newCoc,
    });

  } catch (error) {
    console.error("Error creating COC:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// export const createCoc = async (req, res) => {
//   try {
//     const newCoc = new Coc(req.body);
//     await newCoc.save();

//     res.status(200).json({
//       success: true,
//       message: "COC record created successfully",
//       data: newCoc
//     });
//   } catch (error) {
//     console.error("Error creating COC:", error);
//     res.status(500).json({ success: false, message: "Server error", error: error.message });
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
      data: cocs
    });

  } catch (error) {
    console.error("Error fetching COC records:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};






