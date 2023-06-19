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
  const [propertyInputArray, setPropertyInputArray] = useState();

  useEffect(() => {
    props.editId && init();
  }, [props.editId]);
  const init = async () => {
    const { getProduct, getCat } = props;
    try {
      const product = await getProduct(props.editId);

      const cat = await getCat({
        id: product.data.categories[0].id,
      });
      const info = {
        ...product.data,
        features: product.data.features,
      };
      setProdcutInfo(info);

      const catDefault = !isEmptyArray(product.data?.categories) && {
        value: product.data.categories[0].id,
        label: product.data.categories[0].title,
      };
      setCatDefaultValue(catDefault);

      const brandDefault = !isEmptyArray(product.data?.brands)
        ? product.data.brands.map((item) => ({
            value: item.id,
            label: item.title,
          }))
        : [];
      setBrandsDefaultValue(brandDefault);
      const typesDefault = !isEmptyArray(product.data?.productTypes)
        ? product.data.productTypes.map((item) => ({
            value: item.id,
            label: item.title,
          }))
        : [];

      const allBrands = !isEmptyArray(cat.data?.brands)
        ? cat.data.brands.map((item) => ({
            value: item.id,
            label: item.title,
          }))
        : [];
      setBrandsDefaultValue(brandDefault);

      const alltypes = !isEmptyArray(cat.data?.productTypes)
        ? cat.data.productTypes.map((item) => ({
            value: item.id,
            label: item.title,
          }))
        : [];
      createInputs(cat.data.propertyTitles, product.data.properties);
      !isEmptyArray(allBrands) ? setBrands([...allBrands]) : setBrands();
      !isEmptyArray(alltypes) ? settypes([...alltypes]) : settypes([]);
      !isEmptyArray(typesDefault)
        ? settypesDefaultValue([...typesDefault])
        : settypesDefaultValue([]);
      !isEmptyArray(brandDefault)
        ? setBrandsDefaultValue([...brandDefault])
        : setBrandsDefaultValue([]);
    } catch (error) {
      console.log("erroe", error);
    }
  };

  const createInputs = (items, defaultValue) => {
    const inputs = !isEmptyArray(items)
      ? items.map((item, index) => {
          const itemId = item.id;
          let valueDefault;
          const selectItems =
            !isEmptyArray(item.properties) &&
            item.properties.map((data) => {
              valueDefault =
                !isEmptyArray(defaultValue) &&
                defaultValue.find((item) => {
                  return item.title == data.title;
                });
              return {
                ...data,
                label: data?.property,
                value: data.id,
                itemId: itemId,
              };
            });

          return {
            name: "feature_" + index,
            label: item.title,
            id: itemId,
            selectItems,
            defaultValue: {
              label: valueDefault.property,
              value: valueDefault.id,
            },
          };
        })
      : [];
    setPropertyInputArray([...inputs]);
  };

  const handleEdit = (e) => {
    let featrues = [];
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    console.log(data);

    for (let key in data) {
      let searchKey = key.search("feature");
      if (searchKey > -1) {
        featrues.push({ id: Number(data[key]) });
        delete data[key];
      }
    }
    const brands =
      !isEmptyArray(brandsDefaultValue) &&
      brandsDefaultValue.map((item) => {
        return { id: item.value };
      });

    const types =
      !isEmptyArray(typesDefaultValue) &&
      typesDefaultValue.map((item) => {
        return { id: item.value };
      });
    const cats = [{ id: catDefaultValue.value }];
    data.categories = cats ? cats : [];
    data.photo = photo;
    data.brands = brands ? brands : [];
    data.types = types ? types : [];
    data.properties = featrues ? featrues : [];
    console.log(data);
    props.onEdit(data);
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
      createInputs(result.data.propertyTitles);
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

  const handleChangeProperty = (item) => {
    // console.log(item);
    const changeProperty = propertyInputArray.map((data) => {
      if (data.id === item.itemId) {
        return {
          ...data,
          defaultValue: item,
        };
      }
      return data;
    });
    setPropertyInputArray([...changeProperty]);
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
      propertyInputArray={propertyInputArray}
      onEdit={handleEdit}
      onChangeFile={handleChangeFile}
      onCanclePhtoto={handleCanclePhtoto}
      onChangeType={handleChangeType}
      onChangeBrand={handleChangeBrand}
      onChangeCat={handleChangeCat}
      onChangeProperty={handleChangeProperty}
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
