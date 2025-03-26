const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.getProjects);
router.post("/", projectController.createProject);
router.delete("/:id", projectController.deleteProject);

module.exports = router;
