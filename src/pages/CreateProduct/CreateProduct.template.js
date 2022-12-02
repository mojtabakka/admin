import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Card, ConfirmModal } from "components";
import { LENZ, BORD } from "./CreateProduct.config";
import style from "./CreateProduct.module.scss";
import { Edit } from "./components";
const CreateProductTemplate = ({
  columns,
  fileInputRef,
  isLoading,
  items,
  onChangeFile,
  onClickInputFile,
  onCloseConfirmModal,
  onCloseModal,
  onDisagree,
  onEdit,
  onSubmit,
  open,
  openBackDrop,
  openConfirmModal,
  productInfo,
}) => {
  return (
    <div className=" text__center">
      <div className=" flex__space-between w-100 vh-100">
        <div className="w-75 p-2 vh-100">
          <Card headerTitle="ایجاد محصول جدید" className=" height__85__vh">
            <form onSubmit={onSubmit}>
              <div>
                <div className="py-1">
                  <label>عکس</label>
                  <div
                    onClick={onClickInputFile}
                    className="cursor__pointer background__muted padding__10 rounded border border-dark"
                  >
                    عکس مورد نظر را انتخاب کنید
                  </div>
                  <input
                    type="file"
                    name="myImage"
                    onChange={onChangeFile}
                    className={style.file_input}
                    ref={fileInputRef}
                  />
                </div>
                <div className="py-1">
                  <label>برد </label>
                  <input
                    tabIndex={1}
                    className=" text__right input__default  background__muted"
                    name={BORD}
                  />
                </div>

                <div className="py-3">
                  <label>لنز </label>
                  <input
                    tabIndex={1}
                    className=" text__right input__default  background__muted"
                    name={LENZ}
                  />
                </div>
              </div>
              <div className="text__left margin__horizontal__5 margin__vertical__20">
                <Button type="submit" isLoading={isLoading}>
                  تایید
                </Button>
              </div>
            </form>
          </Card>
        </div>
        <div className="w-100 p-2 vh-100">
          <Card headerTitle="لیست محصولات" className="height__85__vh">
            <Box sx={{ height: "75vh", width: "100%" }}>
              <DataGrid columns={columns} rows={items} />
            </Box>
          </Card>
        </div>
      </div>
      <Edit
        onCloseModal={onCloseModal}
        onEdit={onEdit}
        open={open}
        productInfo={productInfo}
      />
      <ConfirmModal
        content="آیا از حذف این محصول مطمنید؟"
        onCloseConfirmModal={onCloseConfirmModal}
        open={openConfirmModal}
        onDisagree={onDisagree}
      />
      <Backdrop open={openBackDrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export { CreateProductTemplate };
