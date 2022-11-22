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
        display: "block",
        overflow: "auto",
        color: "balck",
      }}
    >
      <div
        className={`${
          SidebarStatus ? "w-10 " : "w-100"
        } h-100   transition shadow overflow-hidden  bg-gray-100 text-white background__white `}
        style={{ boxShadow: "-2px -2px 10px red" }}
      >
        <div
          onClick={OnOpneSidebar}
          className="  text-center rounded inline-block p-3 background__blue-muted text__black "
          style={{
            boxShadow: "5px 5px 10px gray",
            cursor: "pointer",
          }}
        >
          <MdIcons.MdOutlineDoubleArrow
            style={{ transition: " 200ms linear" }}
            className={` inline-block text-xl  ${style.transition} ${
              SidebarStatus ? style.rotate_0 : style.rotate_n90
            }  transform-gpu"`}
          />
        </div>
        <div className="margin__top__10">
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
    </div>
  );
};

export { SidebarTemplate };
