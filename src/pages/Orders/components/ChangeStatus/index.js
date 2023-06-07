import React, { useState } from "react";
import ChangeStatustemplate from "./ChangeStatus.template";
import { isFunction } from "common/utils/function.util";

const ChangeStatus = (props) => {
  const [state, setState] = useState();
  const handleChange = (item) => {
    setState(item.target.value);
  };
  const handleSubmit = (e) => {
    isFunction(props.onSubmit) && props.onSubmit(e, state);
  };
  return (
    <ChangeStatustemplate
      {...props}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
};

export { ChangeStatus };
