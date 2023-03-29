const express = require("express");

const router = express.Router();

const { createTask } = require("../controllers/taskController");

router.post("/", createTask);

module.exports = router;
