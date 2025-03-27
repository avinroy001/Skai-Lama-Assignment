import React, { useState, useEffect } from "react";
import CLOUD from "../Assets/cloud_upload.png";
import "./UploadFlow.css"; 
import ModalUpload from "./ModalUpload";
import FileList from "./FileList";

const AddPodcast = () => {
  const [files, setFiles] = useState([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    // <FileList files={files} setFiles={setFiles} fetchFiles={fetchFiles} />
    try {
      const response = await fetch("https://skai-lama-assignment-0m1m.onrender.com/projects/get-podcasts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
      console.log("Updated file list:", data.podcasts);
  
      if (response.ok) {
        if (Array.isArray(data.podcasts)) {
          setFiles(data.podcasts);
        } else {
          console.error("Error: podcasts is not an array", data);
        }
      } else {
        console.error("Error fetching files:", data.message);
      }
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);
  

  return (
    <div className="addPodcastContainer">
      <h2>Add Podcast</h2>
      <ModalUpload fetchFiles={fetchFiles} />

      {files.length > 0 ? (
        <FileList files={files} setFiles={setFiles} fetchFiles={fetchFiles} />
      ) : (
        <div className="uploadSection">
          <div>
            <img src={CLOUD} alt="cloud-upload" />
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
