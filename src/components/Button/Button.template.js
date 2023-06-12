import React from "react";
import { Spinner } from "components/Spinner";

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
      className={`  bg-blue-200 rounded-xl  px-4 py-3 text-black  text-base font-bold  ${className} `}
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
