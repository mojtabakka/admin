import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProduct, uploadProductImage } from "redux/actions/Product.action";
import { EditTemplate } from "./Edit.template";
import { isEmptyArray } from "common/utils/function.util";
import { getCat } from "redux/actions/Type.action";

const EditComponent = (props) => {
  const [photo, setPhoto] = useState();
  const [brandsDefaultValue, setBrandsDefaultValue] = useState([]);
  const [typesDefaultValue, settypesDefaultValue] = useState([]);
  const [catDefaultValue, setCatDefaultValue] = useState([]);
  const [productInfo, setProdcutInfo] = useState([]);
  const [brands, setBrands] = useState([]);
  const [types, settypes] = useState([]);

  useEffect(() => {
    props.editId && init();
  }, [props.editId]);
  const init = async () => {
    const { getProduct, getCat } = props;
    try {
      const product = await getProduct(props.editId);
      const data = {
        id: Number(product.data.categories[0].id),
        brand: true,
        productType: true,
      };
      const cat = await getCat(data);

      const info = {
        ...product.data,
        features: product.data.features,
      };
      setProdcutInfo(info);

      const catDefault = !isEmptyArray(product.data.categories) && {
        value: product.data.categories[0].id,
        label: product.data.categories[0].title,
      };
      setCatDefaultValue(catDefault);

      const brandDefault =
        !isEmptyArray(product.data.brands) &&
        product.data.brands.map((item) => ({
          value: item.id,
          label: item.title,
        }));
      setBrandsDefaultValue(brandDefault);

      const typesDefault =
        !isEmptyArray(product.data.productTypes) &&
        product.data.productTypes.map((item) => ({
          value: item.id,
          label: item.title,
        }));

      const allBrands =
        !isEmptyArray(cat.data.brands) &&
        cat.data.brands.map((item) => ({
          value: item.id,
          label: item.title,
        }));
      setBrandsDefaultValue(brandDefault);

      const alltypes =
        !isEmptyArray(cat.data.productTypes) &&
        cat.data.productTypes.map((item) => ({
          value: item.id,
          label: item.title,
        }));

      !isEmptyArray(allBrands) && setBrands([...allBrands]);
      !isEmptyArray(alltypes) && settypes([...alltypes]);
      !isEmptyArray(typesDefault) && settypesDefaultValue([...typesDefault]);
      !isEmptyArray(brandDefault) && setBrandsDefaultValue([...brandDefault]);
    } catch (error) {
      console.log("erroe", error);
    }
  };

  const hnadleEdit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    const dataChangedToArray = Object.entries(data);
    const dataMaped = dataChangedToArray.map(([key, value]) => {
      const searchedValue = key.search("_feature");
      if (searchedValue !== -1) {
        return { title: key, value: value };
      }
      return;
    });
    const dataFiltered = dataMaped.filter((item) => {
      const searchedValue = item?.title?.search("_feature");
      if (searchedValue) {
        item.title = item?.title.replace("_feature", "");
        return item;
      }
      return;
    });

    data.features = dataFiltered;
    data.photo = photo;
    const mainData = {};
    Object.keys(data).forEach(function (key, index) {
      console.log(key.search("_feature"));
      if (key.search("_feature") !== -1) {
        return;
      }
      mainData[key] = data[key];
      return;
    });
    props.onEdit(mainData);
  };

  const handleChangeFile = async (file) => {
    const { uploadProductImage } = props;
    const formData = new FormData();
    const uploadedPhoto = await uploadProductImage(formData);
    setPhoto(uploadedPhoto.data.src);
  };

  const handleCanclePhtoto = () => {
    setPhoto(null);
  };

  const handleChangeType = (item) => {
    settypesDefaultValue(item);
  };
  const handleChangeBrand = (item) => {
    setBrandsDefaultValue(item);
  };

  const handleChangeCat = async (item) => {
    const { getCat } = props;
    try {
      // setIsloadingSelect(true);
      const data = {
        id: Number(item?.value),
        brand: true,
        productType: true,
      };
      const result = await getCat(data);
      const brands = result.data.brands.map((item) => ({
        value: item?.id,
        label: item?.title,
      }));
      const productTypes = result.data.productTypes.map((item) => ({
        value: item?.id,
        label: item?.title,
      }));
      setBrands(brands);
      settypes(productTypes);
      setCatDefaultValue(item);
      setBrandsDefaultValue([]);
      settypesDefaultValue([]);
    } catch (error) {
      console.log("error", error);
    } finally {
      // setIsloadingSelect(false);
    }
  };

  return (
    <EditTemplate
      {...props}
      productInfo={productInfo}
      brandsDefaultValue={brandsDefaultValue}
      typesDefaultValue={typesDefaultValue}
      catDefaultValue={catDefaultValue}
      brands={brands}
      types={types}
      photo={photo}
      onEdit={hnadleEdit}
      onChangeFile={handleChangeFile}
      onCanclePhtoto={handleCanclePhtoto}
      onChangeType={handleChangeType}
      onChangeBrand={handleChangeBrand}
      onChangeCat={handleChangeCat}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  uploadProductImage: (data) => dispatch(uploadProductImage(data)),
  getProduct: (id) => dispatch(getProduct(id)),
  getCat: (data) => dispatch(getCat(data)),
});

const Edit = connect(null, mapDispatchToProps)(EditComponent);

export { Edit };
