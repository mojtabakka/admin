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
  NUMBER_OF_EXIST,
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
    <div className="text-center mt-6">
      <div className=" flex justify-between w-full h-screen  rounded-lg ">
        <div className="w-full p-2 h-5/6   overflow-scroll bg-white rounded">
          <Card headerTitle="ایجاد محصول جدید" className="">
            <form onSubmit={onSubmit}>
              <div>
                <FileInput
                  onChange={onChangeFile}
                  photo={photo}
                  onCancle={onCanclePhtoto}
                />

                <div className="py-2 w-full text-right ">
                  <label className=" my-2 px-2">مدل </label>
                  <TextField
                    className=" text-right  w-full"
                    name={MODEL}
                    size="small"
                  />
                </div>

                <div className="flex justify-center items-center ">
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
                  <div className="py-2  text-right ">
                    <label className=" px-2  inline-block mb-2 text-blue-300 font-black">
                      {item.title}
                    </label>
                    <TextField
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

                <div className="py-2  text-right ">
                  <label className="px-2">قیمت برای کاربر </label>
                  <TextField
                    className=" text-right   w-full"
                    name={PRICE_FOR_USER}
                    size="small"
                  />
                </div>

                <div className="py-2  text-right ">
                  <label className="px-2">قیمت برای همکار </label>
                  <TextField
                    className=" text-right   w-full"
                    name={PRICE_FOR_WORKMATE}
                    size="small"
                  />
                </div>
                <div className="py-2  text-right ">
                  <label className="px-2">گارانتی </label>
                  <TextField
                    className=" text__right   w-full"
                    name={WARRANTY}
                    size="small"
                  />
                </div>

                <div className="py-2  text-right ">
                  <label className="px-2">وضعیت موجودی </label>
                  <Select name={EXIST} className="w-full" size="small" ƒ>
                    <MenuItem value={true}>موجود است</MenuItem>
                    <MenuItem value={false}>موجود نیست</MenuItem>
                  </Select>
                </div>

                <div className="py-2  text-right ">
                  <label className="px-2">تعداد موجودی </label>
                  <TextField
                    className=" text__right   w-full"
                    name={NUMBER_OF_EXIST}
                    size="small"
                    type="number"
                  />
                </div>
              </div>

              <div className=" text-left  mx-2  my-4">
                <Button type="submit" isLoading={isLoading}>
                  تایید
                </Button>
              </div>
            </form>
          </Card>
        </div>
        <div className="w-full p-2 h-5/6   bg-white mx-2  rounded-lg">
          <Card headerTitle="لیست محصولات" >
            <Box sx={{ height: "70.5vh", width: "100%" }}>
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
