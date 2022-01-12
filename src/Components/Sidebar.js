import "./Sidebar.css";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebarTwitterIcon" />

      <SidebarOption active Icons={HomeIcon} text="Home" />
      <SidebarOption Icons={SearchIcon} text="Explore" />
      <SidebarOption Icons={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icons={MailOutlineIcon} text="Messages" />
      <SidebarOption Icons={BookmarkAddIcon} text="Bookmarks" />
      <SidebarOption Icons={ListAltIcon} text="Lists" />
      <SidebarOption Icons={PermIdentityIcon} text="Profile" />
      <SidebarOption Icons={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebarTweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
