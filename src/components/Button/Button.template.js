import React from "react";
import { Spinner } from "react-bootstrap";

const ButtonTemplate = ({
  children = null,
  onClick,
  type = "button",
  isLoading = false,
  className,
}) => {
  const disable = isLoading ? true : false;
  return (
    <button
      onClick={onClick}
      type={type}
      className={` border-0 rounded  px-3 py-1 text__2xsmall background__blue-muted  ${className} `}
      disabled={disable}
    >
      <div>
        {isLoading ? (
          <span className="padding__vertical__10  text__white">
            <Spinner animation="border" variant="light" size="sm" />
          </span>
        ) : (
          <span className="text__bold padding__horizontal__5">{children}</span>
        )}
      </div>
    </button>
  );
};

export { ButtonTemplate };
