import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Card } from "components";
import React from "react";
import { ChangeStatus, OrderDetails } from "./components";

function Orderstemplate({
  columns,
  rows,
  openDetailModal,
  detailsItems,
  openChangeStatusModal,
  onCloseChangeStatusModal,
  onCloseDetailModal,
  onSubmitChangeStatus
}) {
  return (
    <Card headerTitle="لیست محصولات">
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          localeText={{
            MuiTablePagination: {
              labelDisplayedRows: ({ from, to, count }) =>
                `${from} - ${to} محصول از ${count} محصول`,
            },
          }}
          columns={columns}
          rows={rows}
          checkboxSelection
          autoHeight
        />
      </Box>
      <OrderDetails
        open={openDetailModal}
        detailsItems={detailsItems}
        onClose={onCloseDetailModal}
        size="large"
      />
      <ChangeStatus
        onSubmit={onSubmitChangeStatus}
        open={openChangeStatusModal}
        onClose={onCloseChangeStatusModal}
        size="small"
      />
    </Card>
  );
}

export default Orderstemplate;
