import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ErrorBoundary } from "components";
import {
  createProduct,
  deleteProduct,
  getProducts,
} from "redux/actions/Product.action";
import { BORD, LENZ, FIELDS } from "./CreateProduct.config";
import { CreateProductTemplate } from "./CreateProduct.template";
import { Button } from "@mui/material";

const CreateProductComponent = (props) => {
  const [items, setItems] = useState([]);
  const [columns, setColumns] = useState([]);
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
    getProducts();
    try {
    } catch (error) {
    } finally {
      setIsloading(false);
    }
  };
  const getProducts = async () => {
    const { getProducts } = props;
    const columns = [
      { field: FIELDS.BORD, headerName: "نام برد", width: 150 },
      { field: FIELDS.LENZ, headerName: "نام لنز", width: 150 },
      {
        field: "edit",
        sortable: false,
        headerName: "",
        renderCell: (params) => {
          const onClick = (e) => {
            e.stopPropagation();
            edit(params.row);
          };
          return (
            <Button onClick={onClick} variant="contained">
              ویرایش
            </Button>
          );
        },
      },
      {
        field: "delete",
        headerName: "",
        sortable: false,
        renderCell: (params) => {
          const onClick = (e) => {
            e.stopPropagation();
            deleteItem(params.row.id);
          };
          return (
            <Button onClick={onClick} variant="contained" color="error">
              حذف
            </Button>
          );
        },
      },
    ];
    const products = await getProducts();
    const data = products.data.map((item, index) => {
      return {
        id: item._id,
        [BORD]: item.bord,
        [LENZ]: item.lenz,
      };
    });
    setItems(data);
    setColumns(columns);
  };
  const edit = (row) => {};
  const deleteItem = async (id) => {
    const { deleteProduct } = props;
    await deleteProduct({ id });
    getProducts();
  };
  return (
    <ErrorBoundary>
      <CreateProductTemplate
        {...props}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        items={items}
        columns={columns}
      />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createProduct: (data) => dispatch(createProduct(data)),
  getProducts: () => dispatch(getProducts()),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
});

const CreateProduct = connect(null, mapDispatchToProps)(CreateProductComponent);
export { CreateProduct };
