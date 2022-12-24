import { Spinner } from "components/Spinner";
import React from "react";

const PreLoadingTemplate = ({ isLoading = false }) => {
  return (
    <>
      {isLoading && (
        <div className=" position-fixed  h-100 w-100 opacity-25 bg-black  flex__center    w-100 vh-100">
          <div className="">
            <Spinner />
          </div>
        </div>
      )}
    </>
  );
};

export { PreLoadingTemplate };
