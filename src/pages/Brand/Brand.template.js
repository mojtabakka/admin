import { Button, Card, Input, PreLoading } from "components";
import React from "react";
import { BRAND, TITLE } from "./Brand.config";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { PAGE_SIZE } from "config/general.config";

const BrandTemplate = ({ onSubmitBrand, columns, rows, loading, dataGrid }) => {
  const Grid = (
    <Box>
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
        autoHeight
        page={dataGrid.page-1}
        pageSize={PAGE_SIZE}
        loading={loading}
      />
    </Box>
  );
  return (
    <div className="flex h-screen  mt-10">
      <Card headerTitle="ایجاد برند" className="w-full h-5/6">
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
      <Card headerTitle="لیست محصولات" className=" w-full h-5/6 ">
        {Grid}
      </Card>
    </div>
  );
};

export default BrandTemplate;
