const projectService = require("../services/projectService");

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

module.exports = {getProjectsByEmail, createProjectForUser}