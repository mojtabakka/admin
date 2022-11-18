import React from "react";
import { Spinner } from "react-bootstrap";

const PreLoadingTemplate = ({ isLoading = false }) => {
  console.log(isLoading);
  return (
    <>
      {isLoading && (
        <div className=" position-fixed  h-100 w-100 opacity-25 bg-black  flex__center    w-100 vh-100">
          <div className="">
            <Spinner animation="border" size="lg" variant="light" />
          </div>
        </div>
      )}
    </>
  );
};

export { PreLoadingTemplate };
