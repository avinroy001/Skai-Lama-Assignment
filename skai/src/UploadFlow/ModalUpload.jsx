import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
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
  width: "50%",
  height: "55%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 6,
};

export default function ModalUpload({ fetchFiles }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [transcript, setTranscript] = React.useState("");
  // const email = localStorage.getItem("email"); 
  // localStorage.setItem("selectedProject", "MyTestProject");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setName(""); 
    setTranscript("");
  };

  const handleUpload = async () => {
    if (!name || !transcript) {
      alert("Please enter both Name and Transcript.");
      return;
    }
    const email = localStorage.getItem("email");
    const projectName = localStorage.getItem("selectedProject"); 

    if (!projectName) {
      alert("Please select a project before uploading a podcast.");
      return;
    }
console.log(new Date().toISOString());
    try {
      const response = await axios.post("http://localhost:3001/projects/add-podcasts", {
        email,
        projectName,
        podcastName: name,  
        date: new Date().toISOString(),
        transcript,
      });

      if (response.status === 201) {
        console.log("working")
        alert("Podcast added successfully!");
        await fetchFiles();  
        handleClose(); 
      }
    } catch (error) {
      console.error("Error uploading podcast:", error);
      alert(error.response?.data?.error || "Failed to upload podcast.");
      console.log("Email:", localStorage.getItem("email"));
      console.log("Project Name:", localStorage.getItem("selectedProject"));
    }
  };

  const feedItems = [
    { title: "RSS Feed", content: "Lorem ipsum dolor sit. Dolor lorem sit.", pic: RSS },
    { title: "YouTube Video", content: "Lorem ipsum dolor sit. Dolor lorem sit.", pic: YT },
    { title: "Upload Files", content: "Lorem ipsum dolor sit. Dolor lorem sit.", pic: UPPFILE },
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
              <h1>Upload from YouTube</h1>
            </div>
            <div onClick={handleClose}>
              <img src={CLOSE} alt="close symbol" />
            </div>
          </div>

          <div>
            <p>Name</p>
            <input className="nameInput" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Transcript</p>
            <textarea
              name="myText"
              rows="10"
              cols="102"
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
            ></textarea>
          </div>

          <div className="upButt">
            <button className="upload" onClick={handleUpload}>
              Upload
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
ModalUpload.propTypes = {
  fetchFiles: PropTypes.func.isRequired, 
};
