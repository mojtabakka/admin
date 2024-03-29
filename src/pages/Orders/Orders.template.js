import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { FiRefreshCcw } from "react-icons/fi";
import { Button, Card, Input, PreLoading } from "components";
import { ChangeStatus, OrderDetails } from "./components";
import { ORDER_STATUS, PAGE_SIZE } from "config/general.config";
import { FORM_ID, form_inputs } from "./Orders.config";

function Orderstemplate({
  loading,
  dataGrid,
  columns,
  detailsItems,
  openDetailModal,
  rows,
  tabValue,
  onChangeTab,
  onCloseChangeStatusModal,
  onCloseDetailModal,
  onSubmitChangeStatus,
  onSubmitSearch,
  openChangeStatusModal,
  onClickInit,
  onClickRefresh,
  onPageChange,
}) {
  const Grid = (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        localeText={{
          MuiTablePagination: {
            labelDisplayedRows: ({ from, to, count }) =>
              `${from} - ${to} برند از ${count} برند`,
          },
        }}
        rowCount={dataGrid.totalRows}
        columns={columns}
        rows={rows}
        autoHeight
        page={dataGrid.page - 1}
        server
        paginationMode="server"
        pageSize={PAGE_SIZE}
        loading={loading}
        onPageChange={onPageChange}
      />
    </Box>
  );
  return (
    <div>
      <Card headerTitle="فیلتر ها">
        <form onSubmit={onSubmitSearch} id={FORM_ID}>
          <div className="flex ">
            <div className="px-2">
              <Input
                label="کدملی"
                name={form_inputs.nationalCode}
                type="number"
              />
            </div>
            <div className="px-2">
              <Input
                label="شماره تماس"
                name={form_inputs.phoneNumber}
                type="number"
              />
            </div>
            <div className="px-2">
              <Input label="نام " name={form_inputs.name} />
            </div>
            <div className="px-2">
              <Input label="نام خوانوادگی" name={form_inputs.lastName} />
            </div>
            <div className="px-2">
              <Input label="استان" name={form_inputs.state} />
            </div>
          </div>

          <div className="flex">
            <div className="px-2">
              <Input label="شهر" name={form_inputs.city} />
            </div>
            <div className="px-2">
              <Input label="مدل دوربین" name={form_inputs.model} />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="button"
              onClick={onClickInit}
              className="mx-2 bg-red-100 "
            >
              بازگشت به حالت اولیه
            </Button>
            <Button type="submit">جستوجو</Button>
          </div>
        </form>
      </Card>
      <Card headerTitle="لیست محصولات" className="mt-10">
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={onChangeTab} aria-label="lab API tabs example">
              <Tab
                label={ORDER_STATUS.notPayed.text}
                value={ORDER_STATUS.notPayed.value}
              />
              <Tab
                label={ORDER_STATUS.payed.text}
                value={ORDER_STATUS.payed.value}
              />
              <Tab
                label={ORDER_STATUS.preparing.text}
                value={ORDER_STATUS.preparing.value}
              />
              <Tab
                label={ORDER_STATUS.isSendig.text}
                value={ORDER_STATUS.isSendig.value}
              />
              <Tab
                label={ORDER_STATUS.completed.text}
                value={ORDER_STATUS.completed.value}
              />
            </TabList>
          </Box>
          <TabPanel value={ORDER_STATUS.notPayed.value}>{Grid}</TabPanel>
          <TabPanel value={ORDER_STATUS.payed.value}>{Grid}</TabPanel>
          <TabPanel value={ORDER_STATUS.preparing.value}>{Grid}</TabPanel>
          <TabPanel value={ORDER_STATUS.isSendig.value}>{Grid}</TabPanel>
          <TabPanel value={ORDER_STATUS.completed.value}>{Grid}</TabPanel>
        </TabContext>

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
        <div className="flex justify-end mx-6">
          <Button className=" !p-2  " size="small" onClick={onClickRefresh}>
            <FiRefreshCcw className=" inline-block" />
            <span className="px-2">بروزرسانی</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Orderstemplate;
