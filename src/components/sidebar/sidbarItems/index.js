import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "config/sibarMenu.config";
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
      <div
        button
        dense
        {...rest}
        className={` cursor-pointer  p-1   ${
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
          className={`p-3 rounded justify-content-between d-flex`}
        >
          <Link to={path}>
            <div>
              <span
                className={`p text-center inline-block ${
                  sidebarStatus
                    ? "inline-block  px-2 h4 "
                    : "h1 inline-block d-flex"
                } `}
                style={{ transition: "200ms linear" }}
              >
                {icon}
              </span>
              <span
                className={` ${
                  sidebarStatus
                    ? "text-base font-weight-bold"
                    : "font-weight-bold"
                } `}
              >
                {label}
              </span>
            </div>
          </Link>
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
