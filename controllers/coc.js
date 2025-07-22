import Coc from "../schema/CocModel.js";

export const createCoc = async (req, res) => {
  try {
    const newCoc = new Coc(req.body);
    await newCoc.save();

    res.status(200).json({
      success: true,
      message: "COC record created successfully",
      data: newCoc
    });
  } catch (error) {
    console.error("Error creating COC:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const getStudentCoc = async (req, res) => {
  try {
    const cocs = await Coc.find({ studentId: req.params.studentId });

    if (!cocs || cocs.length === 0) {
      return res
        .status(404)
        .json({ message: "No COC records found for this student." });
    }

    res.status(200).json({
      success: true,
      message: "COC record created successfully",
      data: cocs
    });

  } catch (error) {
    console.error("Error fetching COC records:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
