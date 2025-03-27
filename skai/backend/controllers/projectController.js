const projectService = require("../services/projectService");
const ProjectModel = require("../models/ProjectModel");

const getProjectsByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const projects = await projectService.getProjects(email);

    if (!projects) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const createProjectForUser = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ message: "Email and project name are required" });
    }

    const newProject = await projectService.addProject(email, name);
    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// const deleteProject = (req, res) => {
//   const id = parseInt(req.params.id); // Convert ID to a number
//   const projectIndex = projects.findIndex((project) => project.id === id);

//   if (projectIndex === -1) {
//     return res.status(404).json({ message: "Project not found" });
//   }

//   projects.splice(projectIndex, 1);
//   res.json({ message: "Project deleted successfully", id });
// };

const addPodcastForUser = async (req, res) => {
  try {
    const { email, projectName, podcastName, transcript } = req.body;

    if (!email || !projectName || !podcastName || !transcript) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let user = await ProjectModel.findOne({ email });

    if (!user) {
      user = new ProjectModel({ email, projects: [] });
    }

    let project = user.projects.find((proj) => proj.name === projectName);

    if (!project) {
      project = { name: projectName, files: 0, lastEdited: "Just now", createdAt: new Date(), initials: projectName.substring(0, 2).toUpperCase(), podcasts: [] };
      user.projects.push(project);
    }

    project.files += 1; 
    project.lastEdited = new Date().toLocaleString(); 
    if (!project.podcasts) project.podcasts = [];
    project.podcasts.push({ name: podcastName, transcript });

    await user.save();
    return res.status(201).json({ message: "Podcast added successfully", project });
  } catch (error) {
    console.error("Error adding podcast:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getPodcastsByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await ProjectModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const podcasts = user.projects.flatMap((project) =>
      project.podcasts.map((podcast) => ({
        id: podcast._id,
        name: podcast.name,
        date: podcast.uploadedAt || "Unknown Date",
        projectName: project.name, 
      }))
    );

    res.status(200).json({ podcasts });
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProjectsByEmail, createProjectForUser, addPodcastForUser, getPodcastsByEmail };