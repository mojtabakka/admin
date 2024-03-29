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
import { PHOTO, MODEL, BRAND, TYPE } from "./CreateProduct.config";
import { CreateProductTemplate } from "./CreateProduct.template";
import { Button } from "@mui/material";
import { BASE_URL } from "config/variables.config";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { isEmptyArray } from "common/utils/function.util";
import { getCat, getCats } from "redux/actions/Category.action";
const CreateProductComponent = (props) => {
  const [editId, SetEditId] = useState();
  const [brands, setBrands] = useState({});
  const [brandForSend, setBrandForSend] = useState();
  const [categories, setCategories] = useState({});
  const [columns, setColumns] = useState([]);
  const [formInputs, setFormInputs] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isloadingSelect, setIsloadingSelect] = useState(false);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openInputModal, setOpenInputModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [productInfo, setProductInfo] = useState({});
  const [productTypes, setProductTypes] = useState({});
  const [typesForSend, setTypesForSend] = useState();
  const [catValue, setCatValue] = useState(null);
  const [brandsValue, setBrandsValue] = useState(null);
  const [typesValue, setTypesValue] = useState(null);
  const [propertyInputArray, setPropertyInputArray] = useState();
  const [model, setModel] = useState(null);
  const fileInputRef = useRef();

  const [dataGrid, setDataGrid] = useState({
    loading: true,
    rows: [],
    totalRows: 1,
    pageSize: 10,
    page: 1,
  });

  useEffect(() => {
    getAllProducts();
  }, [dataGrid.page]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    setIsloading(true);
    setBrands([]);
    setProductTypes([]);
    try {
      const { getCats } = props;
      const result = await getCats();
      const categories =
        !isEmptyArray(result.data) &&
        result.data.map((item) => {
          return { value: item.id, label: item.title };
        });

      setCategories(categories);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsloading(false);
    }
  };

  const handleClickInputFile = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    try {
      const empty = [];
      let featrues = [];
      setOpenBackDrop(true);
      const { createProduct } = props;
      setIsloading(true);
      e.preventDefault();
      const form = new FormData(e.target);
      const data = Object.fromEntries(form);
      for (let key in data) {
        let searchKey = key.search("feature");
        if (searchKey > -1) {
          featrues.push({ id: Number(data[key]) });
          delete data[key];
        }
      }
      data.properties = featrues;
      data.photo = photo;
      data[BRAND] = brandForSend;
      data[TYPE] = typesForSend;
      const result = await createProduct(data);
      if (result) {
        getAllProducts();
        e.target.reset();
        setBrands([...empty]);
        setProductTypes([...empty]);
        setPhoto(null);
        setPropertyInputArray([...empty]);
        setBrandsValue([...empty]);
        setTypesValue(null);
        setCatValue(null);
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
                className="rouned"
                alt=""
              />
            );
          } else {
            return (
              <div className=" text-center text-gray-500    p-2  border  rounded-full bg-blue-100">
                <PersonOutlineIcon />
              </div>
            );
          }
        },
      },
      { field: MODEL, headerName: "مدل", width: 150 },
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
              <div className="px-5"> ویرایش </div>
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
              <div> حذف</div>
            </Button>
          );
        },
      },
    ];
    try {
      setOpenBackDrop(true);
      const products = await getProducts({ page: dataGrid.page });
      dataGrid.totalRows = products.meta.itemCount;
      setDataGrid({ ...dataGrid });
      const data = products.data.map((item) => {
        return {
          id: item.id,
          [MODEL]: item.model,

          [PHOTO]: item.photo,
        };
      });

      setRows(data);
      setColumns(columns);
    } catch (error) {
      console.log("error", error);
    } finally {
      setOpenBackDrop(false);
    }
  };

  const edit = async (row) => {
    setModel(row.model);
    setOpen(true);
    SetEditId(null);
    SetEditId(row.id);
  };

  const deleteItem = (item) => {
    setProductInfo(item);
    setOpenConfirmModal(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    SetEditId(null);
    setOpen(false);
  };

  const handleEdit = async (data) => {
    setOpenBackDrop(true);
    const { editProduct } = props;
    const mainData = {
      ...data,
    };
    try {
      await editProduct(mainData, model);
      SetEditId(null);
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
      await deleteProduct(productInfo.model);
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

  const hanleChangeCategory = async (item) => {
    let emtpy = [];
    setCatValue(item);
    setBrands([...emtpy]);
    setProductTypes([...emtpy]);
    const { getCat } = props;
    try {
      setIsloadingSelect(true);
      const data = {
        id: Number(item?.value),
        brand: true,
        productType: true,
        propertyTitles: true,
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
      setProductTypes(productTypes);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsloadingSelect(false);
    }
  };

  const createInputs = (items) => {
    const inputs = !isEmptyArray(items)
      ? items.map((item, index) => {
          const selectItems =
            !isEmptyArray(item.properties) &&
            item.properties.map((data) => ({
              label: data?.property,
              value: data.id,
            }));
          return {
            name: "feature_" + index,
            label: item.title,
            selectItems,
          };
        })
      : [];

    setPropertyInputArray(inputs);
  };

  const handleChangeBrand = (item) => {
    setBrandsValue(item);
    setBrandForSend({ id: item.value });
  };

  const handleChangeType = (item) => {
    setTypesValue(item);
    const types =
      !isEmptyArray(item) &&
      item.map((item) => {
        return { id: item.value };
      });
    setTypesForSend(types);
  };
  const handlePageChange = (page) => {
    dataGrid.page = page + 1;
    setDataGrid({ ...dataGrid });
  };
  return (
    <ErrorBoundary>
      <CreateProductTemplate
        {...props}
        brands={brands}
        categories={categories}
        columns={columns}
        dataGrid={dataGrid}
        fileInputRef={fileInputRef}
        formInputs={formInputs}
        isLoading={isLoading}
        isloadingSelect={isloadingSelect}
        rows={rows}
        open={open}
        openBackDrop={openBackDrop}
        openConfirmModal={openConfirmModal}
        openInputModal={openInputModal}
        photo={photo}
        productInfo={productInfo}
        productTypes={productTypes}
        editId={editId}
        propertyInputArray={propertyInputArray}
        catValue={catValue}
        brandsValue={brandsValue}
        typesValue={typesValue}
        onCanclePhtoto={handleCanclePhoto}
        onChangeBrand={handleChangeBrand}
        onChangeCategory={hanleChangeCategory}
        onChangeFile={handleChangeFile}
        onChangeType={handleChangeType}
        onClickInputFile={handleClickInputFile}
        onCloseAddInput={handleCloseAddInput}
        onCloseConfirmModal={handleCloseConfirmModal}
        onCloseModal={handleCloseModal}
        onAgree={handleDisagree}
        onEdit={handleEdit}
        onOpenAddInputModal={handleOpenAddInputModal}
        onOpenModal={handleOpen}
        onSubmit={handleSubmit}
        onSubmitAddInput={handleSubmitAddInput}
        onPageChange={handlePageChange}
      />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createProduct: (data) => dispatch(createProduct(data)),
  getProducts: (data) => dispatch(getProducts(data)),
  getProduct: (id) => dispatch(getProduct(id)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  editProduct: (data, id) => dispatch(editProduct(data, id)),
  getCats: () => dispatch(getCats()),
  uploadProductImage: (data) => dispatch(uploadProductImage(data)),
  getCat: (data) => dispatch(getCat(data)),
});

const CreateProduct = connect(null, mapDispatchToProps)(CreateProductComponent);
export { CreateProduct };
