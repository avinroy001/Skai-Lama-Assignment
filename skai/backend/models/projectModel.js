const { v4: uuidv4 } = require("uuid");

let projects = [
  { id: uuidv4(), name: "Sample Project", files: 4, lastEdited: "a week ago", initials: "SP" },
];

module.exports = projects;
