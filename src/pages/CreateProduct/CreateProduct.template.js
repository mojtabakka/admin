import React from "react";
import { Backdrop, CircularProgress, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

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
  MODEL,
  NUMBER_OF_EXIST,
  OFF,
  PRICE_FOR_USER,
  PRICE_FOR_WORKMATE,
  TYPE,
  WARRANTY,
} from "./CreateProduct.config";
import { AddInputModal, Edit } from "./components";

const CreateProductTemplate = ({
  brands,
  categories,
  columns,
  dataGrid,
  isLoading,
  isloadingSelect,
  open,
  openBackDrop,
  openConfirmModal,
  openInputModal,
  photo,
  productInfo,
  productTypes,
  rows,
  editId,

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
  const Grid = (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        localeText={{
          MuiTablePagination: {
            labelDisplayedRows: ({ from, to, count }) =>
              `${from} - ${to} برند از ${count} برند`,
          },
        }}
        rowCount={200}
        columns={columns}
        rows={rows}
        checkboxSelection
        autoHeight
        page={0}
        pageSize={dataGrid.pageSize - 2}
        loading={isLoading}
      />
    </Box>
  );
  return (
    <div className="flex h-screen mt-7 ">
      <Card
        headerTitle="ایجاد محصول جدید"
        className=" mx-2 w-full  h-5/6  mb-10  !pb-0 overflow-y-scroll "
      >
        <div>
          <form onSubmit={onSubmit} className="grid grid-cols-7  gap-4">
            <label className=" col-span-2 flex items-center "> مدل</label>
            <div className="  col-span-5 w-full ">
              <Input name={MODEL} className="w-full" />
            </div>

            <label className=" col-span-2 flex items-center">دسته بندی</label>
            <div className="  col-span-5 w-full ">
              <Select
                options={categories}
                onChange={onChangeCategory}
                name={CATERGORY}
              />
            </div>
            <label className=" col-span-2 flex items-center"> برند</label>
            <div className="  col-span-5 w-full ">
              <Select
                options={brands}
                loading={isloadingSelect}
                onChange={onChangeBrand}
                name={BRAND}
                isMulti
              />
            </div>

            <label className=" col-span-2 flex items-center"> نوع</label>
            <div className="  col-span-5 w-full ">
              <Select
                options={productTypes}
                loading={isloadingSelect}
                onChange={onChangeType}
                name={TYPE}
                isMulti
              />
            </div>
            <label className=" col-span-2 flex items-center">
              قیمت برای کاربر
            </label>
            <div className="  col-span-5 w-full ">
              <Input name={PRICE_FOR_USER} size="small" />
            </div>
            <label className=" col-span-2 flex items-center">
              قیمت برای همکار
            </label>
            <div className="  col-span-5 w-full ">
              <Input name={PRICE_FOR_WORKMATE} size="small" />
            </div>
            <label className=" col-span-2 flex items-center"> گارانتی</label>
            <div className="  col-span-5 w-full ">
              <Input name={WARRANTY} size="small" />
            </div>
            <label className=" col-span-2 flex items-center">
              تعداد موجودی
            </label>
            <div className="  col-span-5 w-full ">
              <Input name={NUMBER_OF_EXIST} size="small" />
            </div>
            <label className=" col-span-2 flex items-center"> تخفیف</label>
            <div className="  col-span-5 w-full ">
              <Input name={OFF} size="small" />
            </div>

            <label className=" col-span-2 flex items-center"> روش ارسال</label>
            <div className="  col-span-5 w-full ">
              <Input name={DELIVERY_METHOD} size="small" />
            </div>
            <div className=" col-span-4">
              <FileInput
                label="عکس را انتخاب کنید"
                onChange={onChangeFile}
                photo={photo}
                onCancle={onCanclePhtoto}
              />
            </div>
          </form>
        </div>
        <div className=" flex justify-end  top-0    sticky bottom-0 ">
          <Button type="submit" isLoading={isLoading}>
            تایید
          </Button>
        </div>
      </Card>
      <Card headerTitle="لیست محصولات" className="  w-full h-5/6">
        {Grid}
      </Card>
      <Edit
        brands={brands}
        categories={categories}
        productTypes={productTypes}
        onCloseModal={onCloseModal}
        onEdit={onEdit}
        open={open}
        editId={editId}
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
