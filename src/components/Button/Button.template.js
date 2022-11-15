import React from "react";

const ButtonTemplate = ({ children = null, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className=" border-0 rounded  px-4 py-2 text__2xsmall background__blue-muted"
    >
      {children}
    </button>
  );
};

export { ButtonTemplate };
