import React from "react";
import { FileInput, FormModal, Input, Select } from "components";
import {
  WARRANTY,
  EXIST,
  MODEL,
  PRICE_FOR_USER,
  PRICE_FOR_WORKMATE,
  OFF,
  DELIVERY_METHOD,
} from "../../CreateProduct.config";
import { ProductTypes } from "pages/ProductTypes";
import { isEmptyArray } from "common/utils/function.util";

const EditTemplate = ({
  brands,
  categories,
  open,
  formValues,
  onCloseModal,
  onChangeProperty,
  onEdit,
  isLoading,
  onChangeFile,
  photo,
  onCanclePhtoto,
  brandDefaultValue,
  typesDefaultValue,
  catDefaultValue,
  types,
  propertyInputArray,
  onChangeType,
  onChangeBrand,
  onChangeCat,
  onChangeInput,
}) => {
  console.log(formValues);
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
        <div className="flex">
          <div className="mx-2 w-full">
            <Input
              onChange={(event) => onChangeInput(event, MODEL)}
              label="مدل"
              tabIndex={1}
              name={MODEL}
              size="small"
              value={formValues[MODEL]}
            />
          </div>

          <Input
            onChange={(event) => onChangeInput(event, PRICE_FOR_USER)}
            tabIndex={1}
            name={PRICE_FOR_USER}
            value={formValues[PRICE_FOR_USER]}
            size="small"
            label="قیمت برای کاربر"
          />
        </div>
        <div className="flex">
          <div className="mx-2 w-full">
            <Input
              onChange={(event) => onChangeInput(event, PRICE_FOR_WORKMATE)}
              tabIndex={1}
              name={PRICE_FOR_WORKMATE}
              value={formValues[PRICE_FOR_WORKMATE]}
              size="small"
              label="قیمت برای همکار"
            />
          </div>
          <Input
            onChange={(event) => onChangeInput(event, WARRANTY)}
            tabIndex={1}
            name={WARRANTY}
            value={formValues[WARRANTY]}
            size="small"
            label="گارانتی"
          />
        </div>
        <div className="flex">
          <div className="mx-2 w-full">
            <Input
              onChange={(event) => onChangeInput(event, OFF)}
              tabIndex={1}
              name={OFF}
              value={formValues[OFF]}
              size="small"
              label="تخفیف"
              className=""
            />
          </div>

          <Input
            onChange={(event) => onChangeInput(event, DELIVERY_METHOD)}
            tabIndex={1}
            name={DELIVERY_METHOD}
            value={formValues[DELIVERY_METHOD]}
            size="small"
            label="روش ارسال"
          />
        </div>

        <div className="grid grid-cols-4 ">
          <span>
            <Select
              label="دسته بندی"
              options={categories}
              onChange={onChangeCat}
              value={catDefaultValue}
            />
          </span>
          <span>
            <div>
              <Select
                label="برند"
                options={brands}
                value={brandDefaultValue}
                onChange={onChangeBrand}
              />
            </div>
          </span>
          <span>
            <Select
              options={types}
              isMulti
              value={typesDefaultValue}
              onChange={onChangeType}
              label="نوع"
            />
          </span>
          {!isEmptyArray(propertyInputArray) &&
            propertyInputArray.map((item) => {
              return (
                <div className="mx-2">
                  <Select
                    options={item.selectItems}
                    // loading={isloadingSelect}
                    value={item.defaultValue}
                    name={item.name}
                    label={item.label}
                    onChange={onChangeProperty}
                  />
                </div>
              );
            })}
            
        </div>


        <div className="w-1/6  mt-3">
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
