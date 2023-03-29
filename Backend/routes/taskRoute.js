const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
  getSingleTask,
} = require("../controllers/taskController");

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getSingleTask);

module.exports = router;
