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
import { ORDER_STATUS } from "config/general.config";
import { FORM_ID, form_inputs } from "./Orders.config";

function Orderstemplate({
  loading,
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
}) {
  const dataGrid = (
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
        loading={loading}
      />
    </Box>
  );
  return (
    <>
      <div className=""></div>
      <Card headerTitle="فیلتر ها">
        <form onSubmit={onSubmitSearch} id={FORM_ID}>
          <div className="flex">
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
          </div>
          <div className="flex">
            <div className="px-2">
              <Input label="مدل دوربین" name={form_inputs.model} />
            </div>
            <div className="px-2">
              <Input label="استان" name={form_inputs.state} />
            </div>
            <div className="px-2">
              <Input label="شهر" name={form_inputs.city} />
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
          <TabPanel value={ORDER_STATUS.notPayed.value}>{dataGrid}</TabPanel>
          <TabPanel value={ORDER_STATUS.payed.value}>
            <Box sx={{ height: "100%", width: "100%" }}>{dataGrid}</Box>
          </TabPanel>
          <TabPanel value={ORDER_STATUS.preparing.value}>{dataGrid}</TabPanel>
          <TabPanel value={ORDER_STATUS.isSendig.value}>{dataGrid}</TabPanel>
          <TabPanel value={ORDER_STATUS.completed.value}>{dataGrid}</TabPanel>
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
    </>
  );
}

export default Orderstemplate;
