import React from "react";
import { items } from "config/sibarMenu.config";
import SidebarItem from "./sidbarItems";
import style from "./index.module.scss";
import * as MdIcons from "react-icons/md";

const SidebarTemplate = ({
  depth,
  depthStep,
  OnOpneSidebar,
  onOpneSidebarFromChild,
  SidebarStatus,
}) => {
  return (
    <>
      <div
        className={` ${SidebarStatus ? "" : ""}  `}
        style={{ boxShadow: "-2px -2px 10px gray" }}
      >
        <div
          className={`${
            SidebarStatus ? "w-96 " : "w-24"
          } h-screen   transition shadow overflow-hidden  bg-gray-100 text-white `}
          style={{ transition: "200ms ease-in-out" }}
        >
          <div
            onClick={OnOpneSidebar}
            className="w-full cursor-pointer text-center rounded inline-block p-1 bg-blue-300"
    
          >
            {" "}
            <MdIcons.MdOutlineDoubleArrow
              style={{ transition: "200ms linear" }}
              className={` inline-block text-xl ${
                SidebarStatus ? "-rotate-180" : "rotate-0"
              }  transform-gpu"`}
            />
          </div>
          {items.map((sidebarItem, index) => (
            <SidebarItem
              onOpenSidebar={onOpneSidebarFromChild}
              sidebarStatus={SidebarStatus}
              key={`${sidebarItem.name}${index}`}
              depthStep={depthStep}
              depth={depth}
              {...sidebarItem}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { SidebarTemplate };
