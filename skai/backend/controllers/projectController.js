// const projectService = require("../services/projectService");
const ProjectModel = require("../models/projectModel");

const getProjectsByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await ProjectModel.findOne({ email });

    if (!user || !user.projects) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ projects: user.projects });
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

    let user = await ProjectModel.findOne({ email });

    if (!user) {
      user = new ProjectModel({ email, projects: [] });
    }

    const newProject = {
      name,
      files: Math.floor(Math.random() * 10) + 1,
      lastEdited: "Just now",
      createdAt: new Date(),
      initials: name.substring(0, 2).toUpperCase(),
    };

    user.projects.push(newProject);
    await user.save();

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
    const { email, projectName, podcastName, date, transcript } = req.body;

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
    project.podcasts.push({ name: podcastName, transcript,createdAt: new Date() });

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
        date: podcast.createdAt || "Unknown Date",
        projectName: project.name, 
      }))
    );

    res.status(200).json({ podcasts });
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const deletePodcastForUser = async (req, res) => {
  try {
    const { id } = req.params;

    let user = await ProjectModel.findOne({ "projects.podcasts._id": id });

    if (!user) {
      return res.status(404).json({ error: "Podcast not found" });
    }

    let projectFound = false;

    user.projects.forEach((project) => {
      const initialLength = project.podcasts.length;
      project.podcasts = project.podcasts.filter((podcast) => podcast._id.toString() !== id);
      if (project.podcasts.length < initialLength) projectFound = true;
    });

    if (!projectFound) {
      return res.status(404).json({ error: "Podcast not found in any project" });
    }

    await user.save();

    return res.status(200).json({ message: "Podcast deleted successfully" });
  } catch (error) {
    console.error("Error deleting podcast:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTranscriptById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await ProjectModel.findOne({ "projects.podcasts._id": id });

    if (!project) return res.status(404).json({ message: "Podcast not found" });

    const podcast = project.projects.flatMap(p => p.podcasts).find(p => p._id.toString() === id);

    if (!podcast) return res.status(404).json({ message: "Podcast not found" });

    res.json({ transcript: podcast.transcript });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = { getProjectsByEmail, createProjectForUser, addPodcastForUser, getPodcastsByEmail, deletePodcastForUser, getTranscriptById };