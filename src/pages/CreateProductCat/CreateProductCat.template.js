import { Button, Card, Input } from "components";
import React from "react";
import { FiPlus } from "react-icons/fi";
import {
  BRAND_FORM,
  PRODUCT_TYPE,
  PRODUCT_TYPE2_FORM,
} from "./CreateProductCat.config";
import { isEmptyArray } from "common/utils/function.util";

const CreateProductCatTemplate = ({
  productType,
  showBrand = false,
  showTypes,
  onSubmitBrand,
  onSubmitProductType,
  onSubmitProductType2,
  onClickPlusBrand,
  onClickPlustype,
  onChangeProductType,
  brands,
  types,
}) => {
  return (
    <>
      <Card headerTitle="نوع محصول">
        <form onSubmit={onSubmitProductType}>
          <Input
            type="text"
            name={PRODUCT_TYPE}
            onChange={onChangeProductType}
            label="نوع محصول را وارد کنید"
          />
          <div className="flex justify-end p-5">
            <Button type="submit">تایید</Button>
          </div>
        </form>
      </Card>
      <Card
        headerTitle={`برندهای ${productType}`}
        className={`mt-5 ${showBrand ? null : "hidden"}`}
      >
        <form onSubmit={onSubmitBrand} id={BRAND_FORM}>
          <div className="  items-center">
            <span className="py-10 px-2">
              <Input
                type="text"
                label="برند۱"
                name="brand1"
                className="inline-block"
              />
            </span>

            {!isEmptyArray(brands) &&
              brands.map((item, index) => (
                <span className="mx-3" key={"brand" + index}>
                  <Input
                    type="text"
                    name={"brand" + (index + 2)}
                    label={`برند ${index + 2}`}
                  />
                </span>
              ))}
            <span
              className=" bg-blue-400  px-2 py-1   rounded-3xl "
              onClick={onClickPlusBrand}
            >
              <FiPlus className="text-white inline-block cursor-pointer text-xl  " />
            </span>
          </div>
          <div className="flex justify-end p-5">
            <Button type="submit">تایید</Button>
          </div>
        </form>
      </Card>

      <Card
        headerTitle={` انواع ${productType}`}
        className={`mt-5 ${showTypes ? null : "hidden"}`}
      >
        <form onSubmit={onSubmitProductType2} id={PRODUCT_TYPE2_FORM}>
          <div className="  items-center">
            <span className="py-10">
              <Input type="text" label="برند۱" className="inline-block" />
            </span>

            {!isEmptyArray(types) &&
              types.map((item, index) => (
                <span className="mx-3" key={"type" + index}>
                  <Input
                    type="text"
                    name={"type" + (index + 2)}
                    label={`نوع ${index + 2}`}
                  />
                </span>
              ))}
            <span
              className=" bg-blue-400  px-2 py-1   rounded-3xl "
              onClick={onClickPlustype}
            >
              <FiPlus className="text-white inline-block cursor-pointer text-xl  " />
            </span>
          </div>
          <div className="flex justify-end p-5">
            <Button type="submit">تایید</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default CreateProductCatTemplate;
