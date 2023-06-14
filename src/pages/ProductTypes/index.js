import React, { useEffect, useState } from "react";
import ProductTypesTemplate from "./ProductTypes.template";
import { connect } from "react-redux";
import { TITLE, TYPE } from "./ProductTypes.config";
import {
  addProductType,
  getProductType,
  getProductTypes,
} from "redux/actions/Type.action";

const ProductTypesPage = (props) => {
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
    getTypes();
  }, []);

  const getTypes = async () => {
    const { getProductTypes } = props;
    try {
      setLoading(true);
      //   const { getBrands } = props;
      const result = await getProductTypes();
      console.log(result);
      const columns = [
        { field: TITLE, headerName: "عنوان", width: 150 },
        { field: TYPE, headerName: "نوع", width: 150 },

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
          [TITLE]: item?.title,
          [TYPE]: item?.type,
          id: item?.id,
        };
      });

      setColumns(columns);
      setRows(rows);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitType = async (e) => {
    try {
      setLoading(true);
      const { addProductType } = props;
      e.preventDefault();
      const form = new FormData(e.target);
      const data = Object.fromEntries(form);
      await addProductType(data);
      getTypes();
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductTypesTemplate
      {...props}
      onSubmitType={handleSubmitType}
      columns={columns}
      rows={rows}
      loading={loading}
      dataGrid={dataGrid}
    />
  );
};
const mapDispatchToProps = (dispatch) => ({
  addProductType: (data) => dispatch(addProductType(data)),
  getProductTypes: () => dispatch(getProductTypes()),
});

const ProductTypes = connect(null, mapDispatchToProps)(ProductTypesPage);

export { ProductTypes };
