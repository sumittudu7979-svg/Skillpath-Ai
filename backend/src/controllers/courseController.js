const roadmaps = require("../../data/roadmaps");

const getCourses = async (req, res) => {
  try {
    const { goal } = req.query;

    if (!goal) {
      return res.status(400).json({
        success: false,
        message: "Goal is required",
      });
    }

    const roadmap = roadmaps[goal];

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "No courses found for this goal",
      });
    }

    const courses = roadmap.map((topic, index) => ({
      id: index + 1,
      title: topic,
      description: `Master ${topic} from beginner to advanced with practical examples.`,
      duration: `${2 + (index % 3)} Hours`,
      difficulty: index < 3 ? "Beginner" : index < 6 ? "Intermediate" : "Advanced",
      thumbnail: `https://picsum.photos/400/250?random=${index + 1}`,
      progress: 0,
      completed: false,
    }));

    res.status(200).json({
      success: true,
      totalCourses: courses.length,
      courses,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getCourses,
};