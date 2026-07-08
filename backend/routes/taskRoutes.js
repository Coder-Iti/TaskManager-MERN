const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  deleteCompletedTasks,
} = require("../controllers/taskController");

// ================= CREATE TASK =================
router.post("/", protect, createTask);

// ================= GET ALL TASKS =================
router.get("/", protect, getTasks);

// ================= GET SINGLE TASK BY ID =================
router.get("/:id", protect, getTaskById);

// ================= UPDATE TASK =================
router.put("/:id", protect, updateTask);

// ================= DELETE TASK =================
router.delete("/:id", protect, deleteTask);

// ================= DELETE COMPLETED TASKS =================
router.delete("/completed/all", protect, deleteCompletedTasks);

module.exports = router;