import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaPlus } from "react-icons/fa";
import "./HomePage.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="createProjectBtn" onClick={handleOpen}>
              <FaPlus className="plusIcon" /> Create New Project
            </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h4>Create Project</h4>
        <form>
          <label>Enter Project Name:</label>
          <input placeholder='Type here'/>
        </form>
        <p>Project Name Can't be empty</p>
        <button>Cancel</button>
        <button>Create</button>
        </Box>
      </Modal>
    </div>
  );
}
