import React from "react";
import { Fragment } from "react";
import { ThreeDots } from "react-loader-spinner";
// import logo from "asset/images/logo.jpegs";

const PreLoadingTemplate = ({ loading = false }) => {
  return (
    <Fragment>
      <div
        className={`flex items-center justify-center h-full w-full fixed top-0 right-0 z-50 ${
          loading ? "block" : "hidden"
        }`}
      >
        <div className=" flex justify-center">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={loading}
          />
        </div>
      </div>
      <div
        className={` z-10 fixed flex justify-center bg-gray-400 w-full h-full top-0 right-0  items-center opacity-50 ${
          loading ? "block" : "hidden"
        }`}
      ></div>
    </Fragment>
  );
};

export { PreLoadingTemplate };
