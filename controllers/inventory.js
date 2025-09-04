import Inventory from "../schema/InventoryModel.js";

export const addInventory = async (req, res) => {
  try {
    const { take, type, studentId, ingredients } = req.body;

    if (
      (!type,
      !studentId || !Array.isArray(ingredients) || ingredients.length === 0)
    ) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    await Inventory.create({
      take,
      type,
      studentId,
      ingredients,
    });

    return res
      .status(201)
      .json({ success: true, message: "Inventory Success" });
  } catch (error) {
    console.error("Error adding inventorys:", error);
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const getInventory = async (req, res) => {
  try {
    const { type, take } = req.query;
    const { id } = req.params;

    const data = await Inventory.findOne({ take, type, studentId: id });

    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Inventory not found", data });
    }

    return res
      .status(200)
      .json({ success: true, message: "Get Inventory Success", data });
  } catch (error) {
    console.error("Error fetching inventory:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
