import React from "react";
import { connect } from "react-redux";
import { ErrorBoundary } from "components";
import { createProduct } from "redux/actions/Product.action";
import { CreateProductTemplate } from "./CreateProduct.template";
import { useState } from "react";

const CreateProductComponent = (props) => {
  const [isLoading, setIsloading] = useState(false);
  const handleSubmit = async (e) => {
    setIsloading(true);
    const { createProduct } = props;
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    await createProduct(data);
    try {
    } catch (error) {
      console.log('hello');
      console.log("error", error);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <ErrorBoundary>
      <CreateProductTemplate
        {...props}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createProduct: (data) => dispatch(createProduct(data)),
});

const CreateProduct = connect(null, mapDispatchToProps)(CreateProductComponent);
export { CreateProduct };
