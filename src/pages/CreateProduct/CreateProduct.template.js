import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Card } from "components";
import React from "react";
import { LENZ, BORD } from "./CreateProduct.config";
const CreateProductTemplate = ({ onSubmit, isLoading, items, columns }) => {
  return (
    <div className=" text__center">
      <div className="margin__top__10">
        <Card headerTitle="ایجاد محصول جدید">
          <form onSubmit={onSubmit} className="white-100">
            <div className="flex__space-between">
              <TextField
                name={BORD}
                label="نام برد"
                variant="outlined"
                className="width__expand p-1"
              />
              <TextField
                name={LENZ}
                label="نام لنز"
                variant="outlined"
                className="width__expand p-1 "
              />
            </div>
            <div className="text__left margin__horizontal__20 margin__vertical__20">
              <Button type="submit" isLoading={isLoading}>
                تایید
              </Button>
            </div>
          </form>
        </Card>
        <div className="margin__top__20">
          <Card headerTitle="لیست محصولات" className="margin__top__30">
            <Box sx={{ height: "50vh", width: "100%" }}>
              <DataGrid columns={columns} rows={items} />
            </Box>
          </Card>
        </div>
      </div>
    </div>
  );
};

export { CreateProductTemplate };
