const { v4: uuidv4 } = require("uuid");
let projects = require("../models/projectModel");

exports.getProjects = (req, res) => {
  res.json(projects);
};

exports.createProject = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Project name is required" });
  }

  const newProject = {
    id: uuidv4(),
    name,
    files: Math.floor(Math.random() * 10) + 1,
    lastEdited: "Just now",
    initials: name.substring(0, 2).toUpperCase(),
  };

  projects.push(newProject);
  res.status(201).json(newProject);
};

exports.deleteProject = (req, res) => {
    const { id } = req.params;
    const projectIndex = projects.findIndex((project) => project.id === id);
  
    if (projectIndex === -1) {
      return res.status(404).json({ message: "Project not found" });
    }
  
    projects.splice(projectIndex, 1);
    res.json({ message: "Project deleted successfully", id });
  };
  
