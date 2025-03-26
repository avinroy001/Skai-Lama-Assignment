let projectId = 1; 

let projects = [
  { id: projectId++, name: "Sample Project", files: 4, lastEdited: "a week ago", initials: "SP" },
];

module.exports = { projects, projectId };
