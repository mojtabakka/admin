import React, { useRef } from "react";
import { CardTemplate } from "./Card.template";

const   Card = (props) => {
  const fileInputRef = useRef();
  const handleClickInputFile = () => {
    fileInputRef.current.click();
  };
  return (
    <CardTemplate
      {...props}
      fileInputRef={fileInputRef}
      onClickInputFile={handleClickInputFile}
    />
  );
};

export { Card };
