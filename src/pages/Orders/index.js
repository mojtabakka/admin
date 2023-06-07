import React, { useEffect, useState } from "react";
import Orderstemplate from "./Orders.template";
import { changeOrderStatus, getOrders } from "redux/actions/Order.action";
import { connect } from "react-redux";
import {
  ADDRESS,
  PHONE_NUMBER,
  NUMBER_OF_PRODUCT,
  STATUS,
} from "./Orders.config";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { BiCommentDetail } from "react-icons/bi";
import { TbExchange } from "react-icons/tb";
import { ORDER_STATUS } from "config/general.config";

const OrdersPage = (props) => {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [openChangeStatusModal, setOpenChangeStatusModal] = useState(false);
  const [columns, setColumns] = useState([]);
  const [detailsItems, setDailsItems] = useState();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);
  const getOrders = async () => {
    const { getOrders } = props;
    const result = await getOrders();
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
  return (
    <Orderstemplate
      openChangeStatusModal={openChangeStatusModal}
      {...props}
      columns={columns}
      rows={rows}
      detailsItems={detailsItems}
      openDetailModal={openDetailModal}
      onSubmitChangeStatus={handleSubmitChangeStatus}
      onCloseDetailModal={handleCloseDetailModal}
      onCloseChangeStatusModal={handleCloseChangeStatusModal}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  getOrders: (data) => dispatch(getOrders(data)),
  changeOrderStatus: (id, data) => dispatch(changeOrderStatus(id, data)),
});

const Orders = connect(null, mapDispatchToProps)(OrdersPage);
export { Orders };
