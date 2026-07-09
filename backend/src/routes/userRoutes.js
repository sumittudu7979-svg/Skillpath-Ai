const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getProfile,
  updateProfile,
  updateGoal,
  updateProgress,
} = require("../controllers/userController");

router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.put("/goal", protect, updateGoal);

router.put("/progress", protect, updateProgress);

module.exports = router;
