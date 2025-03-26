import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineCreate } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { RiVipDiamondLine } from "react-icons/ri";
import AddPodcast from "./AddPodcast";
import "./UploadFlow.css";
import HomeIcon from "../Assets/homepageLogo.png";
import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";

const CreateRepurpose = () => (
  <div className="content">
    <h2>Create & Repurpose</h2>
  </div>
);
const PodcastWidget = () => (
  <div className="content">
    <h2>Podcast Widget</h2>
  </div>
);
const Upgrade = () => (
  <div className="content">
    <h2>Upgrade</h2>
  </div>
);
const Help = () => (
  <div className="content">
    <h2>Help Section</h2>
  </div>
);

export default function UploadFlowOne() {
  const [selectedComponent, setSelectedComponent] = React.useState(
    <AddPodcast />
  );
  const [marker, setMarker] = React.useState("Add your Podcast");
  const email = localStorage.getItem("email");

  const navigate = useNavigate();
  const menuItems = [
    {
      text: "Add your Podcast(s)",
      icon: <FaPlus />,
      component: <AddPodcast />,
    },
    {
      text: "Create & Repurpose",
      icon: <MdOutlineCreate />,
      component: <CreateRepurpose />,
    },
    { text: "Podcast Widget", icon: <FiCopy />, component: <PodcastWidget /> },
    { text: "Upgrade", icon: <RiVipDiamondLine />, component: <Upgrade /> },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: 300, boxSizing: "border-box" },
        }}
      >
        <Box
          sx={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
          role="presentation"
        >
          <img
            src={HomeIcon}
            alt="HomeIcon"
            className="logoo"
            onClick={() => navigate("/HomePage")}
          />
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    setSelectedComponent(item.component);
                    if (item.text !== "Add your Podcast(s)") {
                      setMarker(item.text);
                    } else {
                      setMarker("Add your Podcast");
                    }
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider style={{ marginTop: "auto" }} />

          <List>
            <ListItem key={"Help"} disablePadding>
              <ListItemButton onClick={() => setSelectedComponent(<Help />)}>
                <ListItemIcon>
                  <IoSettingsOutline />
                </ListItemIcon>
                <ListItemText primary={"Help"} />
              </ListItemButton>
            </ListItem>
          </List>

          <div className="smallDetail">
            <div className="pic">avin</div>
            <div className="username">
              <p>Username</p>
              <p>{email}</p>
            </div>
          </div>
        </Box>
      </Drawer>

      <div style={{ flex: 1, padding: "20px", background: "#F5F5F5" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <GoHome />
          <p>
            Home Page / Sample Project /{" "}
            <span className="marker-text">{marker}</span>
          </p>
        </div>
        {selectedComponent}
      </div>
    </div>
  );
}
