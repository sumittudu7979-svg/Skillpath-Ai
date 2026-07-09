const Task = require("../models/Task");
const User = require("../models/User");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });

  res.json(tasks);
};

exports.createDefaultTasks = async (req, res) => {
  const already = await Task.find({ user: req.user.id });

  if (already.length > 0)
    return res.json(already);

  const data = [
    { title: "HTML Revision" },
    { title: "CSS Grid" },
    { title: "React Hooks" },
    { title: "MongoDB CRUD" },
  ];

  const tasks = await Task.insertMany(
    data.map((t) => ({
      ...t,
      user: req.user.id,
    }))
  );

  res.json(tasks);
};

exports.toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  task.completed = !task.completed;

  await task.save();

  const total = await Task.countDocuments({
    user: req.user.id,
  });

  const completed = await Task.countDocuments({
    user: req.user.id,
    completed: true,
  });

  const progress = Math.round(
    (completed / total) * 100
  );

  await User.findByIdAndUpdate(req.user.id, {
    progress,
  });

  res.json(task);
};