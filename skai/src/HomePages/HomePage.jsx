import React from "react";
import HomeIcon from "../Assets/homepageLogo.png";
import Illustration from "../Assets/illustration.png"; // Ensure correct path
import "./HomePage.css";
import { AiFillSetting } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import BasicModal from "./BasicModal.jsx"

const HomePage = () => {
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

      <img src={Illustration} alt="Illustration" className="illustration" />

      <p className="projectDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat. Duis aute irure dolor in reprehenderit in.
      </p>

      <BasicModal/>
    </div>
  );
};

export default HomePage;
