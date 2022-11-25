import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ErrorBoundary } from "components";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "redux/actions/Product.action";
import { BORD, LENZ, FIELDS } from "./CreateProduct.config";
import { CreateProductTemplate } from "./CreateProduct.template";
import { Button } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

const CreateProductComponent = (props) => {
  const [columns, setColumns] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, []);
  const handleSubmit = async (e) => {
    try {
      setOpenBackDrop(true);
      const { createProduct } = props;
      setIsloading(true);
      e.preventDefault();
      const form = new FormData(e.target);
      const data = Object.fromEntries(form);
      await createProduct(data);
      getAllProducts();
    } catch (error) {
      console.log("error", error);
    } finally {
      setOpenBackDrop(false);
      setIsloading(false);
    }
  };
  const getAllProducts = async () => {
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
            <Button onClick={onClick} variant="outlined">
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
            deleteItem(params.row);
          };
          return (
            <Button onClick={onClick} variant="outlined" color="error">
              حذف
            </Button>
          );
        },
      },
    ];
    try {
      setOpenBackDrop(true);
      const products = await getProducts();
      const data = products.data.map((item) => {
        return {
          id: item._id,
          [BORD]: item.bord,
          [LENZ]: item.lenz,
        };
      });
      setItems(data);
      setColumns(columns);
    } catch (error) {
      console.log("error", error);
    } finally {
      setOpenBackDrop(false);
    }
  };

  const edit = (row) => {
    setProductInfo(row);
    setOpen(true);
  };
  const deleteItem = (item) => {
    setProductInfo(item);
    setOpenConfirmModal(true);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleEdit = async (data) => {
    setOpenBackDrop(true);
    const { editProduct } = props;
    const mainData = {
      ...data,
      id: productInfo.id,
    };
    try {
      await editProduct(mainData);
      getAllProducts();
    } catch (error) {
      console.log("error", error);
    } finally {
      setOpen(false);
      setOpenBackDrop(false);
    }
  };
  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false);
  };

  const handleDisagree = async () => {
    setOpenBackDrop(true);
    const { deleteProduct } = props;
    try {
      await deleteProduct({ id: productInfo.id });
      getAllProducts();
    } catch (error) {
      console.log("error", error);
    } finally {
      setOpenBackDrop(false);
      setOpenConfirmModal(false);
    }
  };
  return (
    <ErrorBoundary>
      <CreateProductTemplate
        {...props}
        columns={columns}
        isLoading={isLoading}
        items={items}
        open={open}
        openBackDrop={openBackDrop}
        productInfo={productInfo}
        onCloseConfirmModal={handleCloseConfirmModal}
        onCloseModal={handleCloseModal}
        onEdit={handleEdit}
        onOpenModal={handleOpen}
        onSubmit={handleSubmit}
        openConfirmModal={openConfirmModal}
        onDisagree={handleDisagree}
      />
    </ErrorBoundary>
);
};

const mapDispatchToProps = (dispatch) => ({
  createProduct: (data) => dispatch(createProduct(data)),
  getProducts: () => dispatch(getProducts()),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  editProduct: (data) => dispatch(editProduct(data)),
});

const CreateProduct = connect(null, mapDispatchToProps)(CreateProductComponent);
export { CreateProduct };
