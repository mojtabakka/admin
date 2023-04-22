import React from "react";
import { FileInput, FormModal } from "components";
import {
  WARRANTY,
  EXIST,
  MODEL,
  PRICE_FOR_USER,
  PRICE_FOR_WORKMATE,
} from "../../CreateProduct.config";
import { MenuItem, Select, TextField } from "@mui/material";

const EditTemplate = ({
  open,
  onCloseModal,
  productInfo,
  onEdit,
  isLoading,
  onChangeFile,
  photo,
  onCanclePhtoto,
}) => {
  return (
    <FormModal
      open={open}
      onClose={onCloseModal}
      onSubmit={onEdit}
      isLoading={isLoading}
      title="ویرایش"
    >
      <FileInput
        onChange={onChangeFile}
        photo={photo}
        onCancle={onCanclePhtoto}
      />
      <div>
        <div className="py-2 w-full text-right">
          <label>مدل </label>
          <TextField
            tabIndex={1}
            className=" text-right  w-full"
            name={MODEL}
            size="small"
            defaultValue={productInfo[MODEL]}
          />
        </div>

        {productInfo?.features &&
          productInfo.features.map((item) => (
            <div className="py-2">
              <label className=" inline-block mb-2 font-black text-right">
                {item.title}
              </label>
              <TextField
                tabIndex={1}
                className=" text-right  w-full border-blue-300"
                name={item.title + "_feature"}
                size="small"
                defaultValue={item.value}
              />
            </div>
          ))}

        <div className="py-2 text-right">
          <label>قیمت برای کاربر </label>
          <TextField
            tabIndex={1}
            className=" text-right   w-full"
            name={PRICE_FOR_USER}
            defaultValue={productInfo[PRICE_FOR_USER]}
            size="small"
          />
        </div>

        <div className="py-2 text-right">
          <label>قیمت برای همکار </label>
          <TextField
            tabIndex={1}
            className=" text-right   w-full"
            name={PRICE_FOR_WORKMATE}
            defaultValue={productInfo[PRICE_FOR_WORKMATE]}
            size="small"
          />
        </div>
        <div className="py-2 text-right">
          <label>گارانتی </label>
          <TextField
            tabIndex={1}
            className=" text__right   w-full"
            name={WARRANTY}
            defaultValue={productInfo[WARRANTY]}
            size="small"
          />
        </div>

        <div className="py-2 text-right">
          <label>وضعیت موجودی </label>
          <Select name={EXIST} className="w-full" size="small" ƒ>
            <MenuItem value={true}>موجود است</MenuItem>
            <MenuItem value={false}>موجود نیست</MenuItem>
          </Select>
        </div>
      </div>
    </FormModal>
  );
};

export { EditTemplate };
