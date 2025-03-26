const ProjectModel = require("../models/ProjectModel");

const getProjects = async (email) => {
  const user = await ProjectModel.findOne({ email });
  return user ? user.projects : null;
};

const addProject = async (email, name) => {
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

  return newProject;
};

module.exports = { getProjects, addProject };
