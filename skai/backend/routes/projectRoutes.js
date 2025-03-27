const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/get-projects", projectController.getProjectsByEmail);
router.post("/add-project", projectController.createProjectForUser);
router.post("/add-podcasts", projectController.addPodcastForUser);
router.post("/get-podcasts", projectController.getPodcastsByEmail);
router.delete("/delete-podcast/:id", projectController.deletePodcastForUser);
router.get("/get-transcript/:id", projectController.getTranscriptById);


module.exports = router;
