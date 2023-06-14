import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Card, Input } from "components";
import { TYPE } from "./ProductTypes.config";
import React from "react";

const ProductTypesTemplate = ({
  columns,
  rows,
  dataGrid,
  loading,
  onSubmitType,
}) => {
    console.log(TYPE);
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
      <Card headerTitle="ایجاد نوع محصول">
        <form onSubmit={onSubmitType}>
          <div className="  items-center">
            <span className="py-1 px-2">
              <Input
                type="text"
                label="نام برند را به زبان فارسی وارد کنید"
                name={TYPE}
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
      <Card headerTitle="نوع محصولات" className="mt-10">
        {Grid}
      </Card>
    </>
  );
};

export default ProductTypesTemplate;
