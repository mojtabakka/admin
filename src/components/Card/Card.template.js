import { Avatar } from "@mui/material";
import React from "react";
import style from "./Card.module.scss";

const CardTemplate = ({
  showHeader = true,
  headerTitle,
  showFooter = false,
  footer,
  children,
  className,
  avatar,
}) => {
  return (
    <div
      className={`position-relative border__radius__large  background__white ${className}  `}
      style={{ boxShadow: "0px 1px 2px 0px rgb(21 27 38 / 15%)" }}
    >
      <div>
        {showHeader && (
          <>
            <div className={`p-2  text__right  ${style.header_border}`}>
              {headerTitle}
            </div>
            <div className="border width__expand  "></div>
          </>
        )}

        <div
          className=" position-absolute w-100 flex__center   border__white"
          style={{ top: "-40px" }}
        >
          {avatar && (
            <div
              style={{ border: "5px solid white" }}
              className="border__radius__circle"
            >
              <Avatar
                alt={avatar?.alt}
                src={avatar?.img}
                sx={{ width: 70, height: 70 }}
              />
            </div>
          )}
        </div>

        <div className={`z${avatar && " padding__top__30"}`}>
          <div className=" text__right p-3 margin__vertical__10  ">
            {children}
          </div>
        </div>
        {showFooter && (
          <>
            <div className="border width__expand margin__top__25"></div>
            <div className="p-3 text__left">{footer()}</div>
          </>
        )}
      </div>
    </div>
  );
};

export { CardTemplate };
