import React, { useState, useEffect } from "react";
import HomeIcon from "../Assets/homepageLogo.png";
import Illustration from "../Assets/illustration.png";
import "./HomePage.css";
import { AiFillSetting } from "react-icons/ai";
import { FaRegBell, FaTrash } from "react-icons/fa";
import BasicModal from "./BasicModal";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const email = localStorage.getItem("email"); // Get email from localStorage

  const fetchProjects = () => {
    if (!email) {
      console.error("No email found in localStorage.");
      return;
    }

    fetch("http://localhost:3001/projects/get-projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => setProjects(data.projects || []))
      .catch((error) => console.error("Error fetching projects:", error));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/projects/delete-project/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting project:", error));
  };

  return (
    <div className="mainContainerHomePage">
      <nav className="containerHomepage">
        <img src={HomeIcon} alt="HomeIcon" />
        <div className="iconsContainer">
          <AiFillSetting style={{ fontSize: "40px" }} />
          <FaRegBell style={{ fontSize: "40px" }} />
        </div>
      </nav>

      {projects.length === 0 ? (
        <>
          <div className="homeHeading">
            <p>Create a New Project</p>
          </div>
          <div className="containerChild">
            <img src={Illustration} alt="Illustration" className="illustration" />
            <div className="projectDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              Duis aute irure dolor in reprehenderit in
            </div>
            <BasicModal fetchProjects={fetchProjects} />
          </div>
        </>
      ) : (
        <>
          <div className="homeHead">
            <div>
              <p>Project</p>
            </div>
            <div>
              <BasicModal fetchProjects={fetchProjects} />
            </div>
          </div>
          <div className="projects-container">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => navigate("/UploadFlowOne")}
                style={{ cursor: "pointer" }}
              >
                <div className="project-icon">{project.initials}</div>
                <div className="project-details">
                  <h2 className="project-name">{project.name}</h2>
                  <p className="project-files">{project.files} Files</p>
                  <p className="last-edited">Last edited {project.lastEdited}</p>
                </div>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(project.id);
                  }}
                >
                  <FaTrash /> Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
