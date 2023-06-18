import { Button, Card, Input, Select } from "components";
import React from "react";
import { PRODUCT_TYPE } from "./CreateProductCat.config";
import { isEmptyArray } from "common/utils/function.util";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
const CreateProductCatTemplate = ({
  brands,
  columns,
  dataGrid,
  loading,
  properties,
  rows,
  types,
  onChangebrand,
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
    <>
      <Card headerTitle="نوع محصول">
        <form onSubmit={onSubmit}>
          <div className=" flex ">
            <Input
              type="text"
              name={PRODUCT_TYPE}
              onChange={onChangeProductType}
              label="نام دسته بندی را وارد کنید"
            />

            <span className="mx-10 mt-2">
              <span> برندها </span>
              <Select options={brands} isMulti onChange={onChangebrand} />
            </span>

            <span className="mx-10 mt-2">
              <span> انواع</span>
              <Select options={types} isMulti onChange={onChangeType} />
            </span>

            <span className="mx-10 mt-2">
              <span> ویژگی ها</span>
              <Select
                options={properties}
                isMulti
                onChange={onChangeProperties}
              />
            </span>
          </div>
          <div className="flex justify-end p-5">
            <Button type="submit">تایید</Button>
          </div>
        </form>
      </Card>

      <Card headerTitle="لیست دسته بندی ها " className="mt-10">
        {Grid}
      </Card>
    </>
  );
};

export default CreateProductCatTemplate;
