import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaPlusCircle } from "react-icons/fa";
import "./HomePage.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "21rem%",
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "2rem",
  boxShadow: 24,
  p: 3,
};

export default function BasicModal({ fetchProjects }) {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState(false);
  const email = localStorage.getItem("email");

  const handleOpen = () => {
    setOpen(true);
    setError(false);
  };

  const handleClose = () => {
    setOpen(false);
    setProjectName("");
    setError(false);
  };

  const handleCreate = () => {
    if (projectName.trim() === "") {
      setError(true);
      return;
    }

    const newProject = {
      name: projectName,
    };

    fetch("http://localhost:3001/projects/add-project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name: projectName }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchProjects();
        setProjectName("");
        // handleClose();
      })
      .catch((error) => console.error("Error creating project:", error));
      handleClose();
  };

  return (
    <div>
      <button className="createProjectBtn" onClick={handleOpen}>
        <FaPlusCircle className="plusIcon" /> Create New Project
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2>Create Project</h2>
          <input
            className="modalInput"
            placeholder="Type here"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          {error && <p className="errorMessage">Project Name Can't be empty</p>}
          <div className="buttonPosition">
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleCreate}>Create</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
