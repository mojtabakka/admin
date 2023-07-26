import { Button, Card, FileInput, Input, Select } from "components";
import React from "react";
import { PRODUCT_TYPE } from "./CreateProductCat.config";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
const CreateProductCatTemplate = ({
  brands,
  columns,
  dataGrid,
  loading,
  photo,
  properties,
  rows,
  types,
  openBackDrop,
  onCanclePhtoto,
  onChangebrand,
  onChangeFile,
  onChangeProductType,
  onChangeProperties,
  onChangeType,
  onSubmit,
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
        loading={loading}
      />
    </Box>
  );
  return (
    <div className="flex h-screen mt-10">
      <Card headerTitle="نوع محصول" className=" w-full h-5/6">
        <form onSubmit={onSubmit}>
          <div>
            <Input
              type="text"
              name={PRODUCT_TYPE}
              onChange={onChangeProductType}
              label="نام دسته بندی را وارد کنید"
            />

            <span className=" items-center my-4 mt-2 flex">
              <div> برندها </div>
              <Select options={brands} isMulti onChange={onChangebrand} />
            </span>

            <span className="mt-2 flex items-center my-4">
              <div> انواع</div>
              <Select options={types} isMulti onChange={onChangeType} />
            </span>

            <span className="mt-2 flex items-center my-4">
              <div> ویژگی ها</div>
              <Select
                className="w-full"
                options={properties}
                isMulti
                onChange={onChangeProperties}
              />
            </span>

            <div className=" col-span-4">
              <FileInput
                label="عکس دسته بندی را  انتخاب کنید"
                onChange={onChangeFile}
                photo={photo}
                onCancle={onCanclePhtoto}
              />
            </div>
          </div>
          <div className="flex justify-end p-5">
            <Button type="submit">تایید</Button>
          </div>
        </form>
      </Card>
      <Backdrop open={openBackDrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Card headerTitle="لیست دسته بندی ها " className="h-5/6 w-full">
        {Grid}
      </Card>
    </div>
  );
};

export default CreateProductCatTemplate;
