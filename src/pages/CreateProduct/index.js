import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { ErrorBoundary } from "components";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
  uploadProductImage,
} from "redux/actions/Product.action";
import { BORD, LENZ, FIELDS, PHOTO } from "./CreateProduct.config";
import { CreateProductTemplate } from "./CreateProduct.template";
import { Button } from "@mui/material";
import { BASE_URL } from "config/variables.config";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const CreateProductComponent = (props) => {
  const [columns, setColumns] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleClickInputFile = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    try {
      setOpenBackDrop(true);
      const { createProduct } = props;
      setIsloading(true);
      e.preventDefault();
      const form = new FormData(e.target);
      const data = Object.fromEntries(form);
      data.photo = photo;
      await createProduct(data);
      getAllProducts();
      e.target.reset();
      setPhoto(null);
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
      {
        field: "photo",
        sortable: false,
        headerName: "عکس",
        renderCell: (params) => {
          if (params.row?.photo) {
            return (
              <img
                src={BASE_URL + params.row.photo}
                width={50}
                height={50}
                className="border__radius__circle"
              />
            );
          } else {
            return (
              <div className="text__center text__muted  padding__10 border border__radius__circle background__blue-muted">
                <PersonOutlineIcon />
              </div>
            );
          }
        },
      },
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
            <Button onClick={onClick}>
              <EditIcon />
              <div className="padding__horizontal__5"> ویرایش </div>
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
            <Button onClick={onClick} color="error">
              <DeleteIcon />
              <div className="padding__horizontal__10"> حذف</div>
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
          [PHOTO]: item.photo,
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
  const handleChangeFile = async (file) => {
    const { uploadProductImage } = props;
    try {
      if (file) {
        setOpenBackDrop(true);
        const formData = new FormData();
        formData.append("photo", file);
        const uploadedPhoto = await uploadProductImage(formData);
        setPhoto(uploadedPhoto.data.src);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setOpenBackDrop(false);
    }
  };

  const handleCanclePhoto = () => {
    setPhoto(null);
  };
  return (
    <ErrorBoundary>
      <CreateProductTemplate
        {...props}
        columns={columns}
        fileInputRef={fileInputRef}
        isLoading={isLoading}
        items={items}
        open={open}
        openBackDrop={openBackDrop}
        openConfirmModal={openConfirmModal}
        productInfo={productInfo}
        photo={photo}
        onClickInputFile={handleClickInputFile}
        onCloseConfirmModal={handleCloseConfirmModal}
        onCloseModal={handleCloseModal}
        onDisagree={handleDisagree}
        onEdit={handleEdit}
        onOpenModal={handleOpen}
        onSubmit={handleSubmit}
        onChangeFile={handleChangeFile}
        onCanclePhtoto={handleCanclePhoto}
      />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createProduct: (data) => dispatch(createProduct(data)),
  getProducts: () => dispatch(getProducts()),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  editProduct: (data) => dispatch(editProduct(data)),
  uploadProductImage: (data) => dispatch(uploadProductImage(data)),
});

const CreateProduct = connect(null, mapDispatchToProps)(CreateProductComponent);
export { CreateProduct };
