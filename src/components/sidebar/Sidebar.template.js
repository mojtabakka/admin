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
    <div
      className={`h-100  ${SidebarStatus ? "w-25" : style.small_width_menue} ${
        style.transition
      } `}
      style={{
        boxShadow: "-2px -2px 10px gray",
        transition: "200ms ease-in-out",
        backgroundColor: "#85C9E8",
        display: "block",
        overflow: "auto",
      }}
    >
      <div
        className={`${
          SidebarStatus ? "w-10 " : "w-100"
        } h-100   transition shadow overflow-hidden  bg-gray-100 text-white `}
      >
        <div
          onClick={OnOpneSidebar}
          className=" w-full cursor-pointer text-center rounded inline-block p-3 "
          style={{ backgroundColor: "#08A45C" }}
        >
          <MdIcons.MdOutlineDoubleArrow
            style={{ transition: " 200ms linear" }}
            className={` inline-block text-xl  ${style.transition} ${
              SidebarStatus ? style.rotate_0 : style.rotate_n90
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
  );
};

export { SidebarTemplate };
