import React, { useState } from "react";
import { SidebarTemplate } from "./Sidebar.template";
import "./index.module.scss";

const Sidebar = (props) => {
  const [SidebarStatus, SetSidebarStatus] = useState(true);
  const [sidebarStatusToDown, SetSidebarStatusToDown] = useState(false);
  const handleOpneSidebar = () => {
    SetSidebarStatus(!SidebarStatus);
  };
  const handleOpneSidebarToDown = () =>
    SetSidebarStatusToDown(!sidebarStatusToDown);
  const handleOpneSidebarFromChild = () => {
    if (SidebarStatus === false) {
      SetSidebarStatus(true);
    }
  };
  return (
    <SidebarTemplate
      {...props}
      SidebarStatus={SidebarStatus}
      sidebarStatusToDown={sidebarStatusToDown}
      OnOpneSidebar={handleOpneSidebar}
      onOpneSidebarToDown={handleOpneSidebarToDown}
      onOpneSidebarFromChild={handleOpneSidebarFromChild}
    />
  );
};
export { Sidebar };
