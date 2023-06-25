import React from "react";
import { FileInput, FormModal, Input, Select } from "components";
import {
  WARRANTY,
  EXIST,
  MODEL,
  PRICE_FOR_USER,
  PRICE_FOR_WORKMATE,
  OFF,
} from "../../CreateProduct.config";
import { ProductTypes } from "pages/ProductTypes";
import { isEmptyArray } from "common/utils/function.util";

const EditTemplate = ({
  brands,
  categories,
  open,
  onCloseModal,
  onChangeProperty,
  productInfo,
  onEdit,
  isLoading,
  onChangeFile,
  photo,
  onCanclePhtoto,
  brandsDefaultValue,
  typesDefaultValue,
  catDefaultValue,
  types,
  propertyInputArray,
  onChangeType,
  onChangeBrand,
  onChangeCat,
}) => {
  return (
    <FormModal
      open={open}
      onClose={onCloseModal}
      onSubmit={onEdit}
      isLoading={isLoading}
      title="ویرایش"
      size="large"
    >
      <div>
        <Input
          label="مدل"
          tabIndex={1}
          name={MODEL}
          size="small"
          defaultValue={productInfo[MODEL]}
        />

        {/* {productInfo?.features &&
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
          ))} */}

        <Input
          tabIndex={1}
          name={PRICE_FOR_USER}
          defaultValue={productInfo[PRICE_FOR_USER]}
          size="small"
          label="قیمت برای کاربر"
        />

        <Input
          tabIndex={1}
          name={PRICE_FOR_WORKMATE}
          defaultValue={productInfo[PRICE_FOR_WORKMATE]}
          size="small"
          label="قیمت برای همکار"
        />
        <Input
          tabIndex={1}
          name={WARRANTY}
          defaultValue={productInfo[WARRANTY]}
          size="small"
          label="گارانتی"
        />

        <Input
          tabIndex={1}
          name={OFF}
          defaultValue={productInfo[OFF]}
          size="small"
          label="تخفیف"
        />

        <Select
          options={categories}
          onChange={onChangeCat}
          value={catDefaultValue}
        />
        <Select
          options={brands}
          isMulti
          value={brandsDefaultValue}
          onChange={onChangeBrand}
        />
        <Select
          options={types}
          isMulti
          value={typesDefaultValue}
          onChange={onChangeType}
        />

        {!isEmptyArray(propertyInputArray) &&
          propertyInputArray.map((item) => {
            return (
              <>
                <Select
                  options={item.selectItems}
                  // loading={isloadingSelect}
                  value={item.defaultValue}
                  name={item.name}
                  label={item.label}
                  onChange={onChangeProperty}
                />
              </>
            );
          })}

        <div className="w-1/6 mx-14 mt-3">
          <FileInput
            onChange={onChangeFile}
            photo={photo}
            onCancle={onCanclePhtoto}
            label="عکس"
          />
        </div>
        {/* <div className="py-2 text-right">
          <label>وضعیت موجودی </label>
          <Select name={EXIST} className="w-full" size="small" ƒ>
            <MenuItem value={true}>موجود است</MenuItem>
            <MenuItem value={false}>موجود نیست</MenuItem>
          </Select>
        </div> */}
      </div>
    </FormModal>
  );
};

export { EditTemplate };
