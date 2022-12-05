import React from "react";
import { EditTemplate } from "./Edit.template";

const Edit = (props) => {
  const hnadleEdit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    props.onEdit(data);
  };  
  return <EditTemplate {...props} onEdit={hnadleEdit} />;
};

export { Edit };
