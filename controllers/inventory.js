import Inventory from "../schema/InventoryModel.js";

export const addInventory = async (req, res) => {
  try {
    const { type, studentId, ingredients } = req.body;

    if (!type, !studentId || !Array.isArray(ingredients) || ingredients.length === 0) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const newInventory = await Inventory.create({
        type,
        studentId,
        ingredients,
    });

    return res.status(201).json(newInventory);
  } catch (error) {
    console.error("Error adding inventorys:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getInventory = async (req, res) => {
  try {
    const { type } = req.query;
    const { id } = req.params;

    const data = await Inventory.findOne({ type, studentId: id });

    if (!data) {
      return res.status(404).json({ success: false, message: "Inventory not found" });
    }

    return res.status(200).json({ success: true, message: "Success", items: data });
  } catch (error) {
    console.error("Error fetching inventory:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
