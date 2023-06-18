import { Button, Card, Input } from "components";
import React from "react";
import { PROPERTY } from "./Property.config";
import { AiOutlinePlus } from "react-icons/ai";
import { TITLE } from "pages/ProductTypes/ProductTypes.config";

const PropertyTemplate = ({ onSubmit, onClickPlus, inputs }) => {
  console.log(inputs);
  return (
    <>
      <div className="w-full h-screen  mt-7 flex">
        <Card
          headerTitle="ایجاد ویژگی جدید"
          className="w-full h-5/6 mx-2 overflow-y-scroll "
        >
          <form onSubmit={onSubmit}>
            <Input
              label="عنوان ویژگی موردنظر برای محصول را وارد کنید"
              name={TITLE}
            />
            <hr className="mt-5" />

            <div className="p-3"> موارد مورد نظر برای ويژگی وارد کنید:</div>
            <div className=" grid-flow-col">
              {inputs.map((item, index) => (
                <Input
                  name={PROPERTY + (index + 1)}
                  type="text"
                  label={`ویژگی ${index + 1}`}
                />
              ))}
              <span
                className="mx-4 bg-blue-100 px-2 py-1 rounded-full cursor-pointer"
                onClick={onClickPlus}
              >
                <AiOutlinePlus className=" inline-block" />
              </span>
            </div>
            <div className="flex justify-end mt-3  bg-white sticky bottom-0 ">
              <Button type="submit">تایید</Button>
            </div>
          </form>
        </Card>
        <Card headerTitle="ویژگی ها " className="w-full h-5/6"></Card>
      </div>
    </>
  );
};

export default PropertyTemplate;
