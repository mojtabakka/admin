import React from "react";
import style from "./Card.module.scss";

const CardTemplate = ({
  showHeader = true,
  headerTitle,
  showFooter = false,
  footer,
  children,
  className,
}) => {
  return (
    <div
      className={` border__radius__large  background__white ${className} `}
      style={{ boxShadow: "0px 1px 2px 0px rgb(21 27 38 / 15%)" }}
    >
      <div>
        {showHeader && (
          <div className={`p-2  text__right    ${style.header_border}`}>
            {headerTitle}
          </div>
        )}
        <div className="border width__expand "></div>
        <div className=" text__right p-3   ">{children}</div>
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
