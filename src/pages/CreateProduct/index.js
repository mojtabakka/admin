import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { ErrorBoundary } from "components";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProducts,
  uploadProductImage,
} from "redux/actions/Product.action";
import { FIELDS, PHOTO, MODEL } from "./CreateProduct.config";
import { CreateProductTemplate } from "./CreateProduct.template";
import { Button } from "@mui/material";
import { BASE_URL } from "config/variables.config";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const CreateProductComponent = (props) => {
  const [columns, setColumns] = useState([]);
  const [formInputs, setFormInputs] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openInputModal, setOpenInputModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [productInfo, setProductInfo] = useState({});
  const fileInputRef = useRef();
  const [dataGrid, setDataGrid] = useState({
    loading: true,
    rows: [],
    totalRows: 200,
    pageSize: 10,
    page: 2,
  });

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleClickInputFile = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    try {
      const features = [];
      setOpenBackDrop(true);
      const { createProduct } = props;
      setIsloading(true);
      e.preventDefault();
      const form = new FormData(e.target);
      const data = Object.fromEntries(form);
      const dataChangedToArray = Object.entries(data);
      const dataMaped = dataChangedToArray.map(([key, value]) => {
        const searchedValue = key.search("_feature");
        if (searchedValue !== -1) {
          return { title: key, value: value };
        }
      });

      const dataFiltered = dataMaped.filter((item) => {
        const searchedValue = item?.title.search("_feature");
        if (searchedValue) {
          item.title = item?.title.replace("_feature", "");
          return item;
        }
      });
      delete data.updatedAt;

      data.features = dataFiltered;
      data.photo = photo;
      const result = await createProduct(data);
      if (result) {
        getAllProducts();
        e.target.reset();
        setPhoto(null);
      }
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
        headerClassName: "super-app-theme--header",
        field: "photo",
        sortable: false,
        headerName: "عکس",
        filterable: false,
        hideable: false,
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
      { field: FIELDS.MODEL, headerName: "مدل", width: 150 },
      {
        field: "edit",
        sortable: false,
        headerName: "",
        filterable: false,
        hideable: false,
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
        filterable: false,
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
          id: item.id,
          [MODEL]: item.model,
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

  const edit = async (row) => {
    const { getProduct } = props;
    try {
      const product = await getProduct(row.id);
      const info = {
        ...product.data,
        features: product.data.features,
      };
      setProductInfo(info);
      setOpen(true);
    } catch (error) {
      console.log("erroe", error);
    }
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
    };
    try {
      await editProduct(mainData, productInfo.id);
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
      await deleteProduct(productInfo.id);
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

  const handleOpenAddInputModal = () => {
    setOpenInputModal(true);
  };
  const handleSubmitAddInput = (data) => {
    formInputs.push(data);
    setFormInputs(formInputs);
    setOpenInputModal(false);
  };
  const handleCloseAddInput = () => {
    setOpenInputModal(false);
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
        openInputModal={openInputModal}
        photo={photo}
        productInfo={productInfo}
        formInputs={formInputs}
        onCanclePhtoto={handleCanclePhoto}
        onChangeFile={handleChangeFile}
        onClickInputFile={handleClickInputFile}
        onCloseAddInput={handleCloseAddInput}
        onCloseConfirmModal={handleCloseConfirmModal}
        onCloseModal={handleCloseModal}
        onDisagree={handleDisagree}
        onEdit={handleEdit}
        onOpenAddInputModal={handleOpenAddInputModal}
        onOpenModal={handleOpen}
        onSubmit={handleSubmit}
        onSubmitAddInput={handleSubmitAddInput}
        dataGrid={dataGrid}
      />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createProduct: (data) => dispatch(createProduct(data)),
  getProducts: () => dispatch(getProducts()),
  getProduct: (id) => dispatch(getProduct(id)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  editProduct: (data, id) => dispatch(editProduct(data, id)),

  uploadProductImage: (data) => dispatch(uploadProductImage(data)),
});

const CreateProduct = connect(null, mapDispatchToProps)(CreateProductComponent);
export { CreateProduct };
