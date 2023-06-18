import React, { useEffect, useState } from "react";
import BrandTemplate from "./Brand.template";
import { addBrand, getBrands } from "redux/actions/Type.action";
import { connect } from "react-redux";
import { BRAND, TITLE } from "./Brand.config";

const BrandPage = (props) => {
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [dataGrid, setDataGrid] = useState({
    loading: true,
    totalRows: 200,
    pageSize: 15,
    page:1 ,
  });

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    try {
      setLoading(true);
      const { getBrands } = props;
      const result = await getBrands();
      const columns = [
        { field: TITLE, headerName: "عنوان", width: 150 },
        { field: BRAND, headerName: "برند", width: 150 },

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
          [BRAND]: item?.brand,
          [TITLE]: item?.title,
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
  const handleSubmitBrand = async (e) => {
    try {
      setLoading(true);
      const { addBrand } = props;
      e.preventDefault();
      const form = new FormData(e.target);
      const data = Object.fromEntries(form);
      await addBrand(data);
      getBrands();
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <BrandTemplate
      {...props}
      columns={columns}
      rows={rows}
      loading={loading}
      dataGrid={dataGrid}
      onSubmitBrand={handleSubmitBrand}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBrand: (data) => dispatch(addBrand(data)),
  getBrands: (data) => dispatch(getBrands()),
});

const Brand = connect(null, mapDispatchToProps)(BrandPage);

export { Brand };
