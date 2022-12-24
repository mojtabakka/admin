import React from "react";
import {
  Backdrop,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Button, Card, ConfirmModal, FileInput } from "components";
import {
  WARRANTY,
  EXIST,
  MODEL,
  PRICE_FOR_USER,
  PRICE_FOR_WORKMATE,
} from "./CreateProduct.config";
import { AddInputModal, Edit } from "./components";
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
  onOpenAddInputModal,
  openInputModal,
  onSubmitAddInput,
  onCloseAddInput,
  formInputs,
}) => {
  return (
    <div className=" text-center">
      <div className=" flex justify-between w-full ">
        <div className="w-full p-2 h-screen">
          <Card headerTitle="ایجاد محصول جدید" className=" h-full">
            <form onSubmit={onSubmit}>
              <div>
                <FileInput
                  onChange={onChangeFile}
                  photo={photo}
                  onCancle={onCanclePhtoto}
                />

                <div className="py-2 w-full">
                  <label>مدل </label>
                  <TextField
                    tabIndex={1}
                    className=" text-right  w-full"
                    name={MODEL}
                    size="small"
                  />
                </div>

                <div className="flex justify-center items-center">
                  <div className="w-full">
                    <div className="border-t-2 border-blue-300"></div>
                  </div>
                  <div className="w-full text-center  text-blue-300">
                    ویژگی های محصول
                  </div>
                  <div className="w-full">
                    <div className=" border-t-2 border-blue-300"></div>
                  </div>
                </div>
                {formInputs.map((item) => (
                  <div className="py-2">
                    <label className=" inline-block mb-2 text-blue-300 font-black">
                      {item.title}
                    </label>
                    <TextField
                      tabIndex={1}
                      className=" text-right  w-full border-blue-300"
                      name={item.title + "_feature"}
                      size="small"
                    />
                  </div>
                ))}

                <div className="flex justify-center items-center">
                  <div className="w-full">
                    <div className="border-t-2 border-blue-300"></div>
                  </div>
                  <div
                    className="w-10 p-2 text-center cursor-pointer"
                    onClick={onOpenAddInputModal}
                  >
                    <AiOutlinePlusCircle />
                  </div>
                  <div className="w-full">
                    <div className=" border-t-2 border-blue-300"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className=" border-t-2"></div>
                </div>

                <div className="py-2">
                  <label>قیمت برای کاربر </label>
                  <TextField
                    tabIndex={1}
                    className=" text-right   w-full"
                    name={PRICE_FOR_USER}
                    size="small"
                  />
                </div>

                <div className="py-2">
                  <label>قیمت برای همکار </label>
                  <TextField
                    tabIndex={1}
                    className=" text-right   w-full"
                    name={PRICE_FOR_WORKMATE}
                    size="small"
                  />
                </div>
                <div className="py-2">
                  <label>گارانتی </label>
                  <TextField
                    tabIndex={1}
                    className=" text__right   w-full"
                    name={WARRANTY}
                    size="small"
                  />
                </div>

                <div className="py-2">
                  <label>وضعیت موجودی </label>
                  <Select name={EXIST} className="w-full" size="small" ƒ>
                    <MenuItem value={true}>موجود است</MenuItem>
                    <MenuItem value={false}>موجود نیست</MenuItem>
                  </Select>
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
        <div className="w-full p-2 vh-100">
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

      <AddInputModal
        onCloseModal={onCloseAddInput}
        onSubmit={onSubmitAddInput}
        open={openInputModal}
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
