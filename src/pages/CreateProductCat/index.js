import React, { useEffect, useState } from "react";
import CreateProductCatTemplate from "./CreateProductCat.template";
import {
  BRAND_FORM,
  PRODUCT_TYPE,
  PRODUCT_TYPE2_FORM,
} from "./CreateProductCat.config";
import { connect } from "react-redux";
import { addBrand, addProductType } from "redux/actions/Type.action";

function CreateProductCatPage(props) {
  const [productType, setProductType] = useState();
  const [showBrand, setShowBrand] = useState(false);
  const [showTypes, setShowTypes] = useState(false);

  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);

  const handleSubmitProductType = async (e) => {
    const { addProductType } = props;

    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    data[PRODUCT_TYPE] !== productType &&
      document.getElementById(PRODUCT_TYPE2_FORM).reset();
    data[PRODUCT_TYPE] !== productType &&
      document.getElementById(BRAND_FORM).reset();
    await addProductType(data);

    data[PRODUCT_TYPE] && setProductType(data[PRODUCT_TYPE]);
    data[PRODUCT_TYPE] && setShowBrand(true);
    try {
    } catch (error) {
      console.log("error");
    }
  };

  const handleSubmitBrand = async (e) => {
    e.preventDefault();
    const { addBrand } = props;
    setTypes([]);
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    const brands = data;
    const dataForSend = {
      brands,
      productType,
    };
    await addBrand(dataForSend);
    setShowTypes(true);
  };

  const handleSubmitProductType2 = (e) => {
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    e.preventDefault();
  };

  const handleClickPlusBrand = () => {
    brands.push(0);
    setBrands([...brands]);
  };
  const handleClickPlusType = () => {
    types.push(0);
    setTypes([...types]);
  };
  const handleChangeProductType = () => {
    document.getElementById(PRODUCT_TYPE2_FORM).reset();
    document.getElementById(BRAND_FORM).reset();
    setShowBrand(false);
    setShowTypes(false);
    setBrands([]);
    setTypes([]);
  };

  return (
    <CreateProductCatTemplate
      {...props}
      brands={brands}
      types={types}
      productType={productType}
      showBrand={showBrand}
      showTypes={showTypes}
      onSubmitBrand={handleSubmitBrand}
      onSubmitProductType={handleSubmitProductType}
      onSubmitProductType2={handleSubmitProductType2}
      onClickPlusBrand={handleClickPlusBrand}
      onClickPlustype={handleClickPlusType}
      onChangeProductType={handleChangeProductType}
    />
  );
}

const mapDispatchToProps = (dispatch) => ({
  addProductType: (data) => dispatch(addProductType(data)),
  addBrand: (data) => dispatch(addBrand(data)),
});

const CreateProductCat = connect(
  null,
  mapDispatchToProps
)(CreateProductCatPage);

export { CreateProductCat };
