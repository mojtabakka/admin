import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "config/sibarMenu.Config";
import * as MdIcons from "react-icons/md";

const SidebarItem = ({
  depth = 0,
  depthStep = 10,
  icon,
  items,
  label,
  onOpenSidebar,
  path,
  sidebarStatus = false,
  ...rest
}) => {
  const [subNav, setSubNav] = useState(false);
  useEffect(() => {
    if (sidebarStatus === false) {
      setSubNav(false);
    }
  }, [sidebarStatus]);
  const showSubNav = () => {
    setSubNav(!subNav);
  };
  return (
    <>
      <Link to={path}>
        <div
          button
          dense
          {...rest}
          className={`cursor-pointer  p-1   ${
            sidebarStatus ? " h-12 mb-2" : null
          }`}
        >
          <div
            style={{
              boxShadow: "0px 3px 3px gray",
              marginLeft: depth * depthStep,
              backgroundColor: colors[depth].backgroundColor,
              color: colors[depth].color,
            }}
            className={`p-3 rounded justify-between flex`}
          >
            <div>
              <span
                className={`pl-4 text-center inline-block ${
                  sidebarStatus ? "inline-block text-base  " : "text-4xl"
                } `}
                style={{ transition: "200ms linear" }}
              >
                {icon}
              </span>
              <span className={` ${sidebarStatus ? "text-base" : "text-xs"} `}>
                {label}
              </span>
            </div>
            {Array.isArray(items) ? (
              <div
                onClick={() => {
                  showSubNav();
                  onOpenSidebar("");
                }}
              >
                <MdIcons.MdKeyboardArrowLeft
                  style={{ transition: "200ms linear" }}
                  className={`${
                    subNav ? "-rotate-90" : "rotate-0"
                  }  transform-gpu"  ${sidebarStatus ? "null" : "mt-6 "} `}
                />
              </div>
            ) : null}
          </div>
        </div>
      </Link>

      {Array.isArray(items) ? (
        <div
          style={{
            maxHeight: `${subNav ? items.length * 110 + "px" : "0px"}`,
            overflow: "hidden",
            transition: "200ms linear",
          }}
        >
          <div>
            {items.map((subItem) => (
              <SidebarItem
                sidebarStatus={sidebarStatus}
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SidebarItem;
