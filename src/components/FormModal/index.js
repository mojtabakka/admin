import React, { useEffect, useState } from "react";
import { FormModalTemplate } from "./FormModal.template";
import { isFunction } from "common/utils/function.util";

const FormModal = (props) => {
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  useEffect(() => {
    isFunction(props.onSubmit) && setShowSubmitButton(true);
  }, []);

  const handleSubmit = (e) => {
    isFunction(props.onSubmit) && setShowSubmitButton(true);
    isFunction(props.onSubmit) && props.onSubmit(e);
  };
  return (
    <FormModalTemplate
      {...props}
      onSubmit={handleSubmit}
      showSubmitButton={showSubmitButton}
    />
  );
};

export { FormModal };
