import React, { useState, useEffect } from "react";
import HomeIcon from "../Assets/homepageLogo.png";
import Illustration from "../Assets/illustration.png";
import "./HomePage.css";
import { AiFillSetting } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import BasicModal from "./BasicModal";

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="mainContainerHomePage">
      <nav className="containerHomepage">
        <img src={HomeIcon} alt="HomeIcon" />
        <div className="iconsContainer">
          <AiFillSetting style={{ fontSize: "40px" }} />
          <FaRegBell style={{ fontSize: "40px" }} />
        </div>
      </nav>

      <div className="homeHeading">
        <p>Create a New Project</p>
      </div>

      {projects.length === 0 ? (
        <>
          <img src={Illustration} alt="Illustration" className="illustration" />
          <div className="projectDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            Duis aute irure dolor in reprehenderit in
          </div>
        </>
      ) : (
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.initials}</div>
              <div className="project-details">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-files">{project.files} Files</p>
                <p className="last-edited">Last edited {project.lastEdited}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <BasicModal setProjects={setProjects} />
    </div>
  );
};

export default HomePage;
