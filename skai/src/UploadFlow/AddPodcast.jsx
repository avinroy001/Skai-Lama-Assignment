import React, { useState } from "react";
import CLOUD from "../Assets/cloud_upload.png";
import "./UploadFlow.css"; 
import ModalUpload from "./ModalUpload";
import FileList from "./FileList";

const AddPodcast = () => {
  const [files, setFiles] = useState([
    { id: 1, name: "THE SIDEPOD S2 EPISODE 15", date: "25 Oct 23 | 09:04" },
    { id: 2, name: "THE SIDEPOD S2 EPISODE 17", date: "27 Oct 23 | 11:08" },
    { id: 3, name: "THE SIDEPOD S2 EPISODE 20", date: "31 Oct 23 | 20:28" },
  ]);
  // const [files, setFiles] = useState([]);

  return (
    <div className="addPodcastContainer">
      <h2>Add Podcast</h2>
      <ModalUpload />

      {/* Conditional Rendering */}
      {files.length > 0 ? (
        <FileList files={files} setFiles={setFiles} />
      ) : (
        <div className="uploadSection">
          <div>
            <img src={CLOUD} alt="cloud-upload"/>
          </div>
          <div>
            <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
          </div>
          <div>
            <p>MP4, MOV, MP3, WAV, PDF, DOCX, or TXT file </p>
          </div>
          <button className="selectButt">Select File</button>
        </div>
      )}
    </div>
  );
};

export default AddPodcast;
