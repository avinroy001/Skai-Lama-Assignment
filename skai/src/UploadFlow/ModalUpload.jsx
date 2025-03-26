import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import YT from "../Assets/image 2.png";
import CLOSE from "../Assets/closeSym.png";
import "./UploadFlow.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalUpload() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Select File</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="heading">
            <div className="modalHeading">
              <img
                src={YT}
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                alt="youtube icon"
              />
              <h1>Upload from Youtube</h1>
            </div>
            <div onClick={handleClose}>
              <img src={CLOSE} alt="close symbol" />
            </div>
          </div>

          <div>
            <p>Name</p>
            <input />
            <p>transcript</p>
            <textarea name="myText" rows="10" cols="50"></textarea>
          </div>
          <div className="upButt">
          <div className="upload">
            <p>Upload</p>
          </div>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
