import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { PiCaretCircleDoubleLeftFill } from "react-icons/pi";
import { PiCaretCircleDoubleRightFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineCreate } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { RiVipDiamondLine } from "react-icons/ri"; // Importing icon
import "./UploadFlow.css"; // Importing CSS for styling

export default function UploadFlowOne() {
  const [open, setOpen] = React.useState(true);

  const menuItems = [
    { text: "Add your Podcast(s)", icon: <FaPlus /> },
    { text: "Create & Repurpose", icon: <MdOutlineCreate /> },
    { text: "Podcast Widget", icon: <FiCopy /> },
    { text: "Upgrade", icon: <RiVipDiamondLine /> },
  ];

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400, position: "relative" }} role="presentation">
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider style={{ marginBottom: "400px" }} />
      <List>
        <ListItem key={"Help"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoSettingsOutline />
            </ListItemIcon>
            <ListItemText primary={"Help"} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider style={{ marginBottom: "3rem" }} />

      <div className="smallDetail">
        <div className="pic">avin</div>
        <div className="username">
          <p>Username</p>
          <p>email</p>
        </div>
      </div>

      {/* Floating button inside drawer (attached to right middle side) */}
      <button onClick={toggleDrawer(false)}>
        <PiCaretCircleDoubleLeftFill size="4em" />
      </button>
    </Box>
  );

  return (
    <div>
      {/* <button className="mainFloatingButton" onClick={toggleDrawer(true)}>
        <FaAngleDoubleLeft className="iconStyle" />
      </button> */}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
