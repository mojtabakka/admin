import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Card, Input } from "components";
import { TITLE, TYPE } from "./ProductTypes.config";
import React from "react";
import { PAGE_SIZE } from "config/general.config";

const ProductTypesTemplate = ({
  columns,
  rows,
  dataGrid,
  loading,
  onSubmitType,
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
        page={dataGrid.page-1}
        pageSize={PAGE_SIZE}
        loading={loading}
      />
    </Box>
  );
  return (
    <div className=" flex h-screen mt-10">
      <Card headerTitle="ایجاد نوع محصول" className="w-full h-5/6">
        <form onSubmit={onSubmitType}>
          <div className="  items-center">
            <span className="py-1 px-2">
              <Input
                type="text"
                label="نوع محصول را به زبان فارسی وارد کنید"
                name={TYPE}
                className="inline-block"
              />

              <Input
                type="text"
                label="نوع محصول را به انگلیسی وارد کنید"
                name={TITLE}
                className="inline-block"
              />
            </span>
          </div>

          <div className="flex justify-end p-5">
            <Button type="submit" isLoading={loading}>
              تایید
            </Button>
          </div>
        </form>
      </Card>
      <Card headerTitle="نوع محصولات" className="w-full h-5/6">
        {Grid}
      </Card>
    </div>
  );
};

export default ProductTypesTemplate;
