import React from "react";
import { Backdrop, CircularProgress, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  Button,
  Card,
  ConfirmModal,
  FileInput,
  Input,
  PreLoading,
  Select,
} from "components";
import {
  BRAND,
  CATERGORY,
  DELIVERY_METHOD,
  EXIST,
  MODEL,
  NUMBER_OF_EXIST,
  OFF,
  PRICE_FOR_USER,
  PRICE_FOR_WORKMATE,
  TYPE,
  WARRANTY,
} from "./CreateProduct.config";
import { AddInputModal, Edit } from "./components";

const localizedTextsMap = {
  columnMenuUnsort: "não classificado",
  columnMenuSortAsc: "Classificar por ordem crescente",
  columnMenuSortDesc: "Classificar por ordem decrescente",
  columnMenuFilter: "Filtro",
  columnMenuHideColumn: "Ocultar",
  columnMenuShowColumns: "Mostrar colunas",
};

const CreateProductTemplate = ({
  brands,
  categories,
  columns,
  dataGrid,
  isLoading,
  isloadingSelect,
  items,
  open,
  openBackDrop,
  openConfirmModal,
  openInputModal,
  photo,
  productInfo,
  productTypes,

  onCanclePhtoto,
  onChangeBrand,
  onChangeCategory,
  onChangeFile,
  onChangeType,
  onCloseAddInput,
  onCloseConfirmModal,
  onCloseModal,
  onDisagree,
  onEdit,
  onSubmit,
  onSubmitAddInput,
}) => {
  return (
    <div className="">
      <Card headerTitle="ایجاد محصول جدید" className="">
        <form onSubmit={onSubmit}>
          <span className="mx-2">
            <Input name={MODEL} label="مدل" />
          </span>
          <span>
            <Select
              label="دسته بندی"
              options={categories}
              onChange={onChangeCategory}
              name={CATERGORY}
            />
          </span>
          <span>
            <Select
              label="برند"
              options={brands}
              loading={isloadingSelect}
              onChange={onChangeBrand}
              name={BRAND}
              isMulti
            />
          </span>

          <span>
            <Select
              label="نوع"
              options={productTypes}
              loading={isloadingSelect}
              onChange={onChangeType}
              name={TYPE}
              isMulti
            />
          </span>
          <span className="mx-2">
            <Input name={PRICE_FOR_USER} size="small" label="قیمت برای کاربر" />
          </span>
          <span className="mx-2">
            <Input
              name={PRICE_FOR_WORKMATE}
              size="small"
              label="قیمت برای همکار"
            />
          </span>
          <span className="mx-2">
            <Input name={WARRANTY} size="small" label="گارانتی" />
          </span>
          <span className="mx-2">
            <Input name={NUMBER_OF_EXIST} size="small" label="تعداد موجودی" />
          </span>
          <span className="mx-2">
            <Input name={OFF} size="small" label="تخفیف" />
          </span>
          <span className="mx-2">
            <Input name={DELIVERY_METHOD} size="small" label="روش ارسال" />
          </span>
          <div className="w-1/5 mt-3">
            <FileInput
              label="عکس را انتخاب کنید"
              onChange={onChangeFile}
              photo={photo}
              onCancle={onCanclePhtoto}
            />
          </div>

          <div className=" flex justify-end ">
            <Button type="submit" isLoading={isLoading}>
              تایید
            </Button>
          </div>
        </form>
      </Card>
      <Card headerTitle="لیست محصولات" className="mt-4">
        <Box sx={{ width: "100%" }}>
          <DataGrid
            dataGrid
            localeText={{
              MuiTablePagination: {
                labelDisplayedRows: ({ from, to, count }) =>
                  `${from} - ${to} محصول از ${count} محصول`,
              },
            }}
            loading={false}
            rowCount={200}
            page={dataGrid.page - 1}
            pageSize={4}
            columns={columns}
            rows={items}
            checkboxSelection
            autoHeight
          />
        </Box>
      </Card>
      <Edit
        brands={brands}
        categories={categories}
        productTypes={productTypes}
        onCloseModal={onCloseModal}
        onEdit={onEdit}
        open={open}
        productInfo={productInfo}
      />

      <AddInputModal
        onCloseModal={onCloseAddInput}
        onSubmit={onSubmitAddInput}
        open={openInputModal}
      />

      <ConfirmModal
        content="آیا از حذف این محصول مطمنید؟"
        onCloseConfirmModal={onCloseConfirmModal}
        open={openConfirmModal}
        onDisagree={onDisagree}
      />
      <Backdrop open={openBackDrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <PreLoading loading={isLoading} />
    </div>
  );
};

export { CreateProductTemplate };
