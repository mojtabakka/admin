import { Button, Card, Input, PreLoading } from "components";
import React from "react";
import { BRAND, TITLE } from "./Brand.config";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const BrandTemplate = ({ onSubmitBrand, columns, rows, loading, dataGrid }) => {
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
      <Card headerTitle="ایجاد برند">
        <form onSubmit={onSubmitBrand}>
          <div className="  items-center">
            <span className="py-1 px-2">
              <Input
                type="text"
                label="نام برند را به زبان فارسی وارد کنید"
                name={BRAND}
                className="inline-block"
              />
            </span>

            <span className="py-1 px-2">
              <Input
                type="text"
                label="نام برند را به زبان انگلیسی وارد کنید"
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
      <Card headerTitle="لیست محصولات" className="mt-10">
        {Grid}
      </Card>
    </>
  );
};

export default BrandTemplate;
