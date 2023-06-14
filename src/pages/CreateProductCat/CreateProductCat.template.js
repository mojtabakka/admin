import { Button, Card, Input } from "components";
import React from "react";
import { PRODUCT_TYPE } from "./CreateProductCat.config";
import { isEmptyArray } from "common/utils/function.util";
const CreateProductCatTemplate = ({
  onSubmitProductType,
  onChangebrand,
  onChangeType,
  onChangeProductType,
  brands,
  types,
}) => {
  return (
    <>
      <Card headerTitle="نوع محصول">
        <form onSubmit={onSubmitProductType}>
          <div className=" flex ">
            <Input
              type="text"
              name={PRODUCT_TYPE}
              onChange={onChangeProductType}
              label="نوع محصول را وارد کنید"
            />
            <span className="mx-4 mt-3 flex ">
              <span> برندها </span>
              <div className=" h-56  bg-gray-100 border  shopx-3 mx-2 rounded-lg p-3 w-48 overflow-y-scroll ">
                {!isEmptyArray(brands) &&
                  brands.map((brand) => (
                    <div>
                      <Input
                        type="checkbox"
                        value={brand.id}
                        label={brand.title}
                        onChange={onChangebrand}
                      />
                    </div>
                  ))}
              </div>
            </span>

            <span className="mx-4 mt-3 flex ">
              <span> انواع</span>
              <div className=" h-56  bg-gray-100 border-gray-100 px-3 mx-2 rounded-lg p-3 w-48 overflow-y-scroll">
                {!isEmptyArray(brands) &&
                  types.map((type) => (
                    <div>
                      <Input
                        type="checkbox"
                        value={type.id}
                        label={type.title}
                        onChange={(item) => onChangeType}
                      />
                    </div>
                  ))}
              </div>
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
