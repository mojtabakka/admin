import React, { useEffect, useState } from "react";
import CreateProductCatTemplate from "./CreateProductCat.template";
import { connect } from "react-redux";
import {
  addBrand,
  addProductType,
  createCat,
  getBrands,
  getCats,
  getProductTypes,
  getProperties,
} from "redux/actions/Type.action";
import { TITLE } from "./CreateProductCat.config";
import { isEmptyArray } from "common/utils/function.util";

function CreateProductCatPage(props) {
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [typesforSend, setTypesforSend] = useState([]);
  const [brandsForSend, setBrandsForSend] = useState([]);
  const [propertiesForSend, setPropertiesForSend] = useState([]);
  const [columns, setColumns] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [dataGrid, setDataGrid] = useState({
    loading: true,
    totalRows: 200,
    pageSize: 8,
    page: 2,
  });
  useEffect(() => {
    init();
    getCatergories();
  }, []);

  const init = async () => {
    const { getBrands, getProductTypes, getProperties } = props;
    const allbrands = await getBrands();
    const myBrands =
      !isEmptyArray(allbrands.data) &&
      allbrands.data.map((item) => ({
        label: item.title,
        value: item,
      }));
    setBrands(myBrands);

    const alltypes = await getProductTypes();
    const myTypes =
      !isEmptyArray(alltypes.data) &&
      alltypes.data.map((item) => ({
        label: item.title,
        value: item,
      }));
    setTypes(myTypes);

    const allProperties = await getProperties();
    console.log(allProperties);
    const myProperties =
      !isEmptyArray(allProperties.data) &&
      allProperties.data.map((item) => ({
        label: item.title,
        value: item,
      }));
    setProperties(myProperties);
  };

  const getCatergories = async () => {
    const { getCats } = props;
    const result = await getCats();

    const columns = [{ field: TITLE, headerName: "عنوان", width: 150 }];

    const rows = result.data.map((item) => {
      return {
        [TITLE]: item?.title,
        id: item?.id,
      };
    });

    setColumns(columns);
    setRows(rows);
  };
  const handleChangeBrand = (item) => {
    setBrandsForSend(item.map((data) => data.value));
  };

  const handleChangeType = (item) => {
    setTypesforSend(item.map((data) => data.value));
  };

  const handleChangeProperties = (item) => {
    setPropertiesForSend(item.map((data) => data.value));
  };
  const handleSubmit = async (e) => {
    const { createCat } = props;
    try {
      e.preventDefault();
      const form = new FormData(e.target);
      const data = Object.fromEntries(form);
      const sendData = {
        type: data.type,
        brands: brandsForSend,
        types: typesforSend,
        properties: propertiesForSend,
      };
      await createCat(sendData);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <CreateProductCatTemplate
      {...props}
      brands={brands}
      columns={columns}
      dataGrid={dataGrid}
      loading={loading}
      properties={properties}
      rows={rows}
      types={types}
      onChangebrand={handleChangeBrand}
      onChangeType={handleChangeType}
      onSubmit={handleSubmit}
      onChangeProperties={handleChangeProperties}
    />
  );
}

const mapDispatchToProps = (dispatch) => ({
  addProductType: (data) => dispatch(addProductType(data)),
  addBrand: (data) => dispatch(addBrand(data)),
  getBrands: () => dispatch(getBrands()),
  getProductTypes: () => dispatch(getProductTypes()),
  createCat: (data) => dispatch(createCat(data)),
  getCats: () => dispatch(getCats()),
  getProperties: () => dispatch(getProperties()),
});

const CreateProductCat = connect(
  null,
  mapDispatchToProps
)(CreateProductCatPage);

export { CreateProductCat };
