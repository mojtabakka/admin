import { ErrorBoundary } from "components";
import React from "react";
import { CreateProductTemplate } from "./CreateProduct.template";

const CreateProduct = (props) => {
  return (
    <ErrorBoundary>
      <CreateProductTemplate {...props} />
    </ErrorBoundary>
  );
};

export { CreateProduct };
