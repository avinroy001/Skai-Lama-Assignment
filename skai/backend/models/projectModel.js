const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  files: { type: Number, default: 0 },
  lastEdited: { type: String, default: "Just now" },
  createdAt: { type: Date, default: Date.now },
  initials: { type: String },
});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  projects: [ProjectSchema], 
});

const Project = mongoose.model("Project", UserSchema);

module.exports = Project;
