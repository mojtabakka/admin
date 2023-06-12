import React, { useEffect, useState } from "react";
import Orderstemplate from "./Orders.template";
import {
  changeOrderStatus,
  getOrders,
  searchOrder,
} from "redux/actions/Order.action";
import { connect } from "react-redux";
import {
  ADDRESS,
  PHONE_NUMBER,
  NUMBER_OF_PRODUCT,
  STATUS,
  FORM_ID,
} from "./Orders.config";
import { Button } from "@mui/material";
import { BiCommentDetail } from "react-icons/bi";
import { TbExchange } from "react-icons/tb";
import { ORDER_STATUS } from "config/general.config";

const OrdersPage = (props) => {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [openChangeStatusModal, setOpenChangeStatusModal] = useState(false);
  const [columns, setColumns] = useState([]);
  const [detailsItems, setDailsItems] = useState();
  const [tabValue, setTabValue] = useState(ORDER_STATUS.notPayed.value);
  const [rows, setRows] = useState([]);
  const [filter, setfilter] = useState({});
  useEffect(() => {
    getOrders();
  }, [filter]);
  const getOrders = async () => {
    const { searchOrder } = props;
    filter.status = tabValue;
    setfilter(filter);
    const result = await searchOrder(filter);
    const columns = [
      { field: PHONE_NUMBER, headerName: "شماره همراه", width: 150 },
      { field: ADDRESS, headerName: "آدرس", width: 150 },
      {
        field: NUMBER_OF_PRODUCT,
        headerName: "تعداد محصول خریداری شده",
        width: 150,
      },

      {
        field: STATUS,
        headerName: "وضعیت",
        width: 150,
      },

      {
        field: "edit",
        sortable: false,
        headerName: "",
        filterable: false,
        hideable: false,
        width: 150,
        renderCell: (params) => {
          const onClick = (e) => {
            e.stopPropagation();
            const item = result.data.filter(
              (item) => item.id === params.row.id
            );
            setDailsItems(item[0]);
            setOpenDetailModal(true);
          };

          return (
            <Button onClick={onClick} color="primary">
              <div color="error font-black ">
                <BiCommentDetail className="text-lg font-black" />
              </div>
              <div className="px-2"> جزییات </div>
            </Button>
          );
        },
      },
      {
        field: "change state",
        sortable: false,
        headerName: "",
        filterable: false,
        hideable: false,
        width: 150,
        renderCell: (params) => {
          const onClick = (e) => {
            const item = result.data.filter(
              (item) => item.id === params.row.id
            );
            setDailsItems(item[0]);
            setOpenChangeStatusModal(true);
            e.stopPropagation();
          };

          return (
            <Button onClick={onClick} className=" text-black">
              <div color="error font-black ">
                <TbExchange className="text-lg font-black" />
              </div>
              <div className="px-2"> تغییر وضعیت</div>
            </Button>
          );
        },
      },
    ];
    const rows = result.data.map((item) => {
      return {
        [PHONE_NUMBER]: item?.user?.phoneNumber,
        [ADDRESS]: item.address.address,
        [NUMBER_OF_PRODUCT]: item.cart.products.length,
        [STATUS]: ORDER_STATUS[item?.status].text,
        id: item?.id,
      };
    });
    setColumns(columns);
    setRows(rows);
  };
  const handleCloseDetailModal = () => {
    setOpenDetailModal(false);
  };

  const handleCloseChangeStatusModal = async () => {
    setOpenChangeStatusModal(false);
  };
  const handleSubmitChangeStatus = async (e, state) => {
    try {
      e.preventDefault();
      const { changeOrderStatus } = props;
      await changeOrderStatus(detailsItems.id, { state });
      getOrders();
    } catch (error) {
      console.log("error", error);
    } finally {
      setOpenChangeStatusModal(false);
    }
  };

  const handleChangeTab = (e, newValue) => {
    filter.status = newValue;
    setfilter({ ...filter });
    setTabValue(newValue);
  };

  const handleSubmitSearch = async (e) => {
    let permision = false;
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    for (var key in data) {
      delete filter[key];
      if (data[key].trim()) {
        permision = true;
        filter[key] = data[key];
      }
    }
    permision && setfilter({ ...filter });
  };

  const handleClickInit = () => {
    let permision = false;
    document.getElementById(FORM_ID).reset();
    const form = new FormData(document.getElementById(FORM_ID));
    const data = Object.fromEntries(form);
    for (var key in data) {
      if (filter[key] && filter[key].trim()) {
        permision = true;
      }
      delete filter[key];
    }
    permision && setfilter({ ...filter });
  };

  return (
    <Orderstemplate
      {...props}
      openChangeStatusModal={openChangeStatusModal}
      columns={columns}
      rows={rows}
      detailsItems={detailsItems}
      openDetailModal={openDetailModal}
      tabValue={tabValue}
      onSubmitChangeStatus={handleSubmitChangeStatus}
      onCloseDetailModal={handleCloseDetailModal}
      onCloseChangeStatusModal={handleCloseChangeStatusModal}
      onChangeTab={handleChangeTab}
      onSubmitSearch={handleSubmitSearch}
      onClickInit={handleClickInit}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  getOrders: (data) => dispatch(getOrders(data)),
  changeOrderStatus: (id, data) => dispatch(changeOrderStatus(id, data)),
  searchOrder: (data) => dispatch(searchOrder(data)),
});

const Orders = connect(null, mapDispatchToProps)(OrdersPage);
export { Orders };
