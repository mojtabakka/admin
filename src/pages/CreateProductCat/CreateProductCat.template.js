import { Button, Card, Input } from "components";
import React from "react";
import { PRODUCT_TYPE } from "./CreateProductCat.config";
import { isEmptyArray } from "common/utils/function.util";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
const CreateProductCatTemplate = ({
  onSubmit,
  onChangebrand,
  onChangeType,
  onChangeProductType,
  brands,
  types,
  dataGrid,
  columns,
  rows,
  loading,
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
              label="نوع محصول را وارد کنید"
            />
            <span className="mx-4 mt-3 flex ">
              <span> برندها </span>
              <div className="  h-32  bg-gray-100 border  shopx-3 mx-2 rounded-lg p-3 w-48 overflow-y-scroll ">
                {!isEmptyArray(brands) &&
                  brands.map((brand) => (
                    <div>
                      <Input
                        type="checkbox"
                        value={brand.id}
                        label={brand.title}
                        onChange={onChangebrand}
                      />
                    </div>
                  ))}
              </div>
            </span>

            <span className="mx-4 mt-3 flex ">
              <span> انواع</span>
              <div className=" h-32  bg-gray-100 border-gray-100 px-3 mx-2 rounded-lg p-3 w-48 overflow-y-scroll">
                {!isEmptyArray(brands) &&
                  types.map((type) => (
                    <div>
                      <Input
                        type="checkbox"
                        value={type.id}
                        label={type.title}
                        onChange={onChangeType}
                      />
                    </div>
                  ))}
              </div>
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
