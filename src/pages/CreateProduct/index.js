import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ErrorBoundary } from "components";
import { createProduct, getProducts } from "redux/actions/Product.action";
import { BORD, LENZ } from "./CreateProduct.config";
import { CreateProductTemplate } from "./CreateProduct.template";

const CreateProductComponent = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
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
    } finally {
      setIsloading(false);
    }
  };
  const getProducts = async () => {
    const { getProducts } = props;
    const products = await getProducts();
    const data = products.data.map((item, index) => {
      return {
        id: index,
        [BORD]: item.bord,
        [LENZ]: item.lenz,
      };
    });
    setItems(data);
  };
  return (
    <ErrorBoundary>
      <CreateProductTemplate
        {...props}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        items={items}
      />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createProduct: (data) => dispatch(createProduct(data)),
  getProducts: () => dispatch(getProducts()),
});

const CreateProduct = connect(null, mapDispatchToProps)(CreateProductComponent);
export { CreateProduct };
