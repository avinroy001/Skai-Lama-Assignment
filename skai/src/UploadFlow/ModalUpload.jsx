import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import YT from "../Assets/image 2.png";
import CLOSE from "../Assets/closeSym.png";
import "./UploadFlow.css";
import RSS from "../Assets/image 1.png";
import UPPFILE from "../Assets/image3inn.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '50%',
  height: '55%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: '1rem',
  boxShadow: 24,
  p: 6,
};

export default function ModalUpload() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const feedItems = [
    { title: "RSS Feed", content: "Lorem ipsum dolor sit. Dolor lorem sit.", pic: RSS },
    { title: "YouTube Video", content: "Lorem ipsum dolor sit. Dolor lorem sit.", pic: YT },
    { title: "Upload Files", content: "Lorem ipsum dolor sit. Dolor lorem sit.", pic: UPPFILE }
  ];

  return (
    <div>
      <div className="feedOptions">
              {feedItems.map((item, index) => (
                <div key={index} className="feedCard" onClick={handleOpen}>
                  <div className="feedText">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                  <div className="feedImage">
                    <img src={item.pic} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
      
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
            <input className="nameInput"/>
            <p>transcript</p>
            <textarea name="myText" rows="10" cols="102"></textarea>
          </div>
          <div className="upButt">
          <div className="upload">
            Upload
          </div>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
