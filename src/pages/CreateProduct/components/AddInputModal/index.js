import React from "react";
import AddInputModalTemplate from "./AddInputModal.template";

const AddInputModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    props.onSubmit(data);
  };
  return <AddInputModalTemplate {...props} onSubmit={handleSubmit} />;
};

export { AddInputModal };
