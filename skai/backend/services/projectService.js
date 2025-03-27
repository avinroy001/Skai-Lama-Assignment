// const ProjectModel = require("../models/ProjectModel");
const ProjectModel = require('../models/ProjectModel')

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

const addPodcastToProject = async (email, projectName, podcastName, transcript) => {
  let user = await ProjectModel.findOne({ email });

  if (!user) {
    return { error: "User not found" };
  }

  let project = user.projects.find((proj) => proj.name === projectName);

  if (!project) {
    return { error: "Project not found" };
  }

  const newPodcast = {
    name: podcastName,
    transcript,
    createdAt: new Date(),
  };

  project.podcasts.push(newPodcast);

  await user.save();

  return newPodcast;
};


module.exports = { getProjects, addProject, addPodcastToProject };
