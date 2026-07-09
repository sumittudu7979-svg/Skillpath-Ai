const router = require("express").Router();

const protect = require("../middleware/authMiddleware");

const {
  getTasks,
  createDefaultTasks,
  toggleTask,
} = require("../controllers/taskController");

router.get("/", protect, getTasks);

router.post("/default", protect, createDefaultTasks);

router.put("/:id", protect, toggleTask);

module.exports = router;