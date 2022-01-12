import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icons }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOptionActive"}`}>
      <Icons />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
