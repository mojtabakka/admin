import React from "react";
import style from "./Card.module.scss";

const CardTemplate = ({
  showHeader = true,
  headerTitle,
  showFooter = false,
  footer,
  children,
}) => {
  return (
    <div
      className=" border__radius__large  background__white  "
      style={{ boxShadow: "-3px 5px 7px gray" }}
    >
      <div>
        {showHeader && (
          <div
            className={`p-2  text__right  background__blue-muted  ${style.header_border}`}
          >
            {headerTitle}
          </div>
        )}
        <div className=" text__right p-3   ">{children}</div>
        {showFooter && (
          <>
            <div className="border width__expand margin__top__25"></div>
            <div className="p-3">{footer()}</div>
          </>
        )}
      </div>
    </div>
  );
};

export { CardTemplate };
