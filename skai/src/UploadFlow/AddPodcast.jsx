import React from "react";
import RSS from "../Assets/image 1.png";
import YT from "../Assets/image 2.png";
import UPPFILE from "../Assets/image3inn.png";
import CLOUD from "../Assets/cloud_upload.png";
import "./UploadFlow.css"; 
import ModalUpload from "./ModalUpload";
import FileList from "./FileList";

const AddPodcast = () => {
  const feedItems = [
    { title: "RSS Feed", content: "Lorem ipsum dolor sit. Dolor lorem sit.", pic: RSS },
    { title: "YouTube Video", content: "Lorem ipsum dolor sit. Dolor lorem sit.", pic: YT },
    { title: "Upload Files", content: "Lorem ipsum dolor sit. Dolor lorem sit.", pic: UPPFILE }
  ];

  return (
    <div className="addPodcastContainer">
      <h2>Add Podcast</h2>
      <div className="feedOptions">
        {feedItems.map((item, index) => (
          <div key={index} className="feedCard">
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
      <div className="uploadSection">
        <div>
            <img src={CLOUD} alt="cloud-upload"/>
        </div>
        <div>
            <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
        </div>
        <div>
            <p>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
        </div>
        <ModalUpload/>
      </div>
      <FileList/>
    </div>
  );
};

export default AddPodcast;
