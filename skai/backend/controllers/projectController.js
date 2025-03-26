const projects = require("../models/projectModel");
exports.getProjects = (req, res) => {
  res.json(projects);
};

exports.createProject = (req, res) => {
  const { name, files } = req.body;
  const newProject = {
    id: Date.now().toString(),
    name,
    files: files || Math.floor(Math.random() * 10) + 1, // Default to a random number of files
    lastEdited: "Just now",
    initials: name.substring(0, 2).toUpperCase(),
  };

  projects.push(newProject);
  res.json(newProject);
};

exports.updateProject = (req, res) => {
  const { id } = req.params;
  const { name, files } = req.body;

  const project = projects.find((p) => p.id === id);
  if (!project) return res.status(404).json({ message: "Project not found" });

  project.name = name || project.name;
  project.files = files || project.files;
  project.lastEdited = "Updated just now";

  res.json(project);
};

exports.deleteProject = (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) return res.status(404).json({ message: "Project not found" });

  projects.splice(index, 1);
  res.json({ message: "Project deleted successfully" });
};
