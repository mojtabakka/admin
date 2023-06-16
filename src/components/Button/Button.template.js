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
      className={` flex items-center  bg-blue-200 rounded-xl  px-4 py-3 text-black  text-base font-bold  ${className} `}
      disabled={disable}
    >
      <div>
        {isLoading ? (
          <span>
            <Spinner animation="border" variant="light" size="sm" />
          </span>
        ) : (
          <span>{children}</span>
        )}
      </div>
    </button>
  );
};

export { ButtonTemplate };
