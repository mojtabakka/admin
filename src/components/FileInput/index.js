import React, { useRef } from "react";
import { FileInputTemplate } from "./FileInput.template";

const FileInput = (props) => {
  const fileInputRef = useRef();
  const handleClickInputFile = () => {
    fileInputRef.current.click();
  };
  const handleClickCancleUploadImage = (e) => {
    e.stopPropagation();
    props.onCancle();
  };
  const handleChangeFile = async (e) => {
    try {
      if (e.target.files[0]) {
        props.onChange(e.target.files[0]);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <FileInputTemplate
      {...props}
      onClickInputFile={handleClickInputFile}
      onClickCancleUploadImage={handleClickCancleUploadImage}
      onChangeFile={handleChangeFile}
      fileInputRef={fileInputRef}
    />
  );
};

export { FileInput };
