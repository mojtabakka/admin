import React from "react";
import { Spinner } from "react-bootstrap";

const ButtonTemplate = ({
  children = null,
  onClick,
  type = "button",
  isLoading = false,
}) => {
  console.log(isLoading);
  return (
    <button
      onClick={onClick}
      type={type}
      className=" border-0 rounded  px-4 py-2 text__2xsmall background__blue-muted"
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
