const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

// Middleware pehle 
app.use(cors());
app.use(express.json());

// Routes baad me
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/courses", courseRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 SkillPath AI Backend Running Successfully!"
  });
});

module.exports = app;