import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Card, ConfirmModal, FileInput } from "components";
import { LENZ, BORD } from "./CreateProduct.config";
import { Edit } from "./components";
const CreateProductTemplate = ({
  columns,
  isLoading,
  items,
  onCanclePhtoto,
  onChangeFile,
  onCloseConfirmModal,
  onCloseModal,
  onDisagree,
  onEdit,
  onSubmit,
  open,
  openBackDrop,
  openConfirmModal,
  photo,
  productInfo,
}) => {
  return (
    <div className=" text__center">
      <div className=" flex__space-between w-100 vh-100">
        <div className="w-75 p-2 vh-100">
          <Card headerTitle="ایجاد محصول جدید" className=" height__85__vh">
            <form onSubmit={onSubmit}>
              <div>
                <FileInput
                  onChange={onChangeFile}
                  photo={photo}
                  onCancle={onCanclePhtoto}
                />
                {/* <div className="py-1">
                  <label>عکس</label>
                  <div
                    onClick={onClickInputFile}
                    className="cursor__pointer background__muted padding__10 rounded border border-dark"
                  >
                    <div className="flex__space-between flex__center">
                      <span>عکس مورد نظر را انتخاب کنید</span>
                      {!photoforShow ? (
                        <UploadIcon />
                      ) : (
                        <div className=" position-relative">
                          <img
                            src={photoforShow}
                            width={50}
                            height={50}
                            className="border__radius__large"
                          />
                          <div
                            className=" position-absolute"
                            style={{ top: "-7px", left: "-7px" }}
                            onClick={onClickCancleUploadImage}
                          >
                            <CancelIcon />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <input
                    type="file"
                    name="photo"
                    onChange={onChangeFile}
                    className={style.file_input}
                    ref={fileInputRef}
                  />
                </div> */}
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
