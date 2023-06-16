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
} from "redux/actions/Type.action";
import { TITLE } from "./CreateProductCat.config";
import { isEmptyArray } from "common/utils/function.util";

function CreateProductCatPage(props) {
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [typesforSend, setTypesforSend] = useState([]);
  const [brandsForSend, setBrandsForSend] = useState([]);
  const [columns, setColumns] = useState([]);
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
    const { getBrands, getProductTypes } = props;
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
      console.log(myTypes);
    setTypes(myTypes);
  };

  const getCatergories = async () => {
    const { getCats } = props;
    const result = await getCats();

    const columns = [
      { field: TITLE, headerName: "عنوان", width: 150 },

      // {
      //   field: "edit",
      //   sortable: false,
      //   headerName: "",
      //   filterable: false,
      //   hideable: false,
      //   width: 150,
      //   renderCell: (params) => {
      //     const onClick = (e) => {
      //       e.stopPropagation();
      //       const item = result.data.filter(
      //         (item) => item.id === params.row.id
      //       );
      //       setDailsItems(item[0]);
      //       setOpenDetailModal(true);
      //     };

      //     return (
      //       <Button onClick={onClick} color="primary">
      //         <div color="error font-black ">
      //           <BiCommentDetail className="text-lg font-black" />
      //         </div>
      //         <div className="px-2"> جزییات </div>
      //       </Button>
      //     );
      //   },
      // },
      // {
      //   field: "change state",
      //   sortable: false,
      //   headerName: "",
      //   filterable: false,
      //   hideable: false,
      //   width: 150,
      //   renderCell: (params) => {
      //     const onClick = (e) => {
      //       const item = result.data.filter(
      //         (item) => item.id === params.row.id
      //       );
      //       setDailsItems(item[0]);
      //       setOpenChangeStatusModal(true);
      //       e.stopPropagation();
      //     };

      //     return (
      //       <Button onClick={onClick} className=" text-black">
      //         <div color="error font-black ">
      //           <TbExchange className="text-lg font-black" />
      //         </div>
      //         <div className="px-2"> تغییر وضعیت</div>
      //       </Button>
      //     );
      //   },
      // },
    ];

    const rows = result.data.map((item) => {
      return {
        // [BRAND]: item?.title,33322
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
    console.log(item);
    setTypesforSend(item.map((data) => data.value));
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
      };

      console.log(sendData);
      const result = await createCat(sendData);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <CreateProductCatTemplate
      {...props}
      brands={brands}
      types={types}
      columns={columns}
      rows={rows}
      loading={loading}
      dataGrid={dataGrid}
      onChangebrand={handleChangeBrand}
      onChangeType={handleChangeType}
      onSubmit={handleSubmit}
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
});

const CreateProductCat = connect(
  null,
  mapDispatchToProps
)(CreateProductCatPage);

export { CreateProductCat };
