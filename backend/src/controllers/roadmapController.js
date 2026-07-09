const roadmaps = require("../../data/roadmaps");

const getRoadmap = (req, res) => {
  try {
    console.log("Query:", req.query);

    const goal = req.query.goal;

    console.log("Goal:", goal);

    const roadmap = roadmaps[goal];

    console.log("Roadmap:", roadmap);

    res.status(200).json({
      success: true,
      goal,
      roadmap: roadmap || [],
    });
  } catch (err) {
    console.error("Roadmap Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getRoadmap,
};