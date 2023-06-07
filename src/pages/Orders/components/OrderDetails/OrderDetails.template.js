import {
  groupBy,
  isEmptyArray,
  isEmptyObject,
} from "common/utils/function.util";
import { FormModal } from "components";
import React from "react";

const OrderDetailsTemplate = ({
  open,
  detailsItems,
  onClose,
  size = "medium",
}) => {
  const products = detailsItems
    ? groupBy(detailsItems?.cart?.products, "model")
    : null;
  return (
    <FormModal open={open} title="جزییات سفارش" onClose={onClose} size={size}>
      {!isEmptyObject(detailsItems) && (
        <>
          <div className="border  rounded">
            <div className="text-xl px-3  py-1 bg-gray-100 ">کاربر</div>
            <div className="p-3">
              <div className="flex ">
                <div className="w-full">
                  <span className="px-2 text-gray-400">نام:</span>
                  <span>{detailsItems?.user?.name}</span>
                </div>

                <div className="w-full">
                  <span className="px-2 text-gray-400">نام خانوادگی:</span>
                  <span>{detailsItems?.user?.lastName}</span>
                </div>

                <div className="w-full">
                  <span className="px-2 text-gray-400">شماره شناسنامه:</span>
                  <span>{detailsItems?.user?.nationalCode}</span>
                </div>
              </div>

              <div className="flex  mt-5">
                <div className="w-full">
                  <span className="px-2 text-gray-400">شماره همراه : </span>
                  <span>{detailsItems?.user?.phoneNumber}</span>
                </div>

                <div className="w-full" rtl="rtl">
                  <span className="px-2 text-gray-400">نام کابری :</span>
                  <span>{detailsItems?.user?.username} </span>
                </div>

                <div className="w-full" rtl="rtl">
                  <span className="px-2 text-gray-400">ایمیل :</span>
                  <span>{detailsItems?.user?.email} </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border  rounded mt-10">
            <div className="text-xl px-3  py-1 bg-gray-100">آدرس</div>

            <div className=" p-3">
              <div className="flex ">
                <div className="w-full">
                  <span className="px-2 text-gray-400">استان: </span>
                  <span>{detailsItems?.address?.state} </span>
                </div>
                <div className="w-full">
                  <span className="px-2 text-gray-400">شهر:</span>
                  <span>{detailsItems?.address?.city} </span>
                </div>

                <div className="w-full">
                  <span className="px-2 text-gray-400"> پلاک: </span>
                  <span>{detailsItems?.address?.plaque} </span>
                </div>

                <div className="w-full">
                  <span className="px-2 text-gray-400"> واحد: </span>
                  <span>{detailsItems?.address?.unit} </span>
                </div>

                <div className="w-full">
                  <span className="px-2 text-gray-400"> کدپستی: </span>
                  <span>{detailsItems?.address?.postalCode} </span>
                </div>
              </div>

              <div className="flex  mt-5">
                <div className="w-full">
                  <span className="px-2 text-gray-400">آدرس کامل</span>
                  <span>{detailsItems?.address?.address} </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border  rounded mt-10">
            <div className="text-xl px-3  py-1 bg-gray-100 ">
              محصلات سفارش شده
            </div>
            <div className=" p-3">
              <div className="flex overflow-x-scroll">
                {!isEmptyArray(products) &&
                  products.map((item, index) => {
                    const key = Object.keys(item)[0];
                    const data = item[key][0];
                    const number = item[key].length;
                    return (
                      <div
                        className="flex border mx-2 py-2 rounded"
                        key={index}
                      >
                        <img
                          src={data.photos[0].src}
                          width={100}
                          height={100}
                        />
                        <div className="relative">
                          <span
                            className="bg-gray-400 p-1 rounded-3xl  absolute "
                            style={{ right: "-30px", bottom: "0px" }}
                          >
                            {number}
                          </span>
                        </div>
                        <div className="px-2 ">
                          <span className="text-xs  text-gray-400"> مدل: </span>
                          <span className="text-xs px-2">{data.model}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </>
      )}
    </FormModal>
  );
};

export default OrderDetailsTemplate;
