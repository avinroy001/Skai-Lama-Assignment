import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaPlusCircle } from "react-icons/fa";
import "./HomePage.css";
import { border, borderRadius } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  height: "21rem%",
  bgcolor: 'background.paper',
  border: '0px solid #000',
  borderRadius: "2rem",
  boxShadow: 24,
  p: 3,
};

export default function BasicModal({setShowProjects}) {
  const [open, setOpen] = React.useState(false);
  const [projectName, setProjectName] = React.useState("");
  const [error, setError] = React.useState(false);
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
    } else {
      setError(false);
      const newProject = {
        id: Date.now(),
        name: projectName,
        files: Math.floor(Math.random() * 10) + 1, // Random file count
        lastEdited: "Just now",
        initials: projectName.substring(0, 2).toUpperCase(),
      };
  
      fetch("http://localhost:3001/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      })
        .then((response) => response.json())
        .then((data) => {
          setShowProjects((prevProjects) => [...prevProjects, data]);
          setProjectName(""); 
        })
        .catch((error) => console.error("Error creating project:", error));
      handleClose(); 
    }
  };

  return (
    <div>
      <button className="createProjectBtn" onClick={handleOpen}>
              <FaPlusCircle className="plusIcon" /> Create New Project
            </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h2>Create Project</h2>
        <form>
          <p>Enter Project Name:</p>
          <input
              className='modalInput'
              placeholder="Type here"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
        </form>
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
