const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/get-projects", projectController.getProjectsByEmail);
router.post("/add-project", projectController.createProjectForUser);

module.exports = router;
