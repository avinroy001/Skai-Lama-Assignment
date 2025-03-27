const mongoose = require("mongoose");

const PodcastSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  transcript: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
});

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  files: { type: Number, default: 0 },
  lastEdited: { type: String, default: "Just now" },
  createdAt: { type: Date, default: Date.now },
  initials: { type: String },
  podcasts: [PodcastSchema],
});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  projects: [ProjectSchema], 
});

const Project = mongoose.model("Project", UserSchema);

module.exports = Project;
