import React from "react";
import { Card } from "components";

const RegisterTemplate = () => {
  return (
    <div className=" position-fixed w-100 h-100   rounded  flex__center  text__bold ">
      <Card
        headerTitle="صفحه ثبت نام"
        showFooter
        footer={() => (
          <button
            type="submit"
            className=" border-0 rounded px-4 py-2 text__small background__blue-muted"
          >
            ورود
          </button>
        )}
      >
        <div>
          <label className="padding__10  text__bold">نام کاربری </label>
          <input className=" text__right input__default  background__muted" />
        </div>
        <div>
          <label className="padding__10">رمز عبور </label>
          <input
            className=" text__right input__default  background__muted"
            type="password"
          />
        </div>
        <div>
          <label className="padding__10">تکرار رمز عبور </label>
          <input
            className=" text__right input__default  background__muted"
            type="password"
          />
        </div>
      </Card>
      {/* <div className=" border__radius__large  background__white  ">
    <div>
      <div
        className={`p-3  text__right  background__blue-muted ${style.header_border}`}
      >
        صفحه ورورد
      </div>
      <div className="border"></div>

      <div className=" text__right p-3  ">

        <div className="margin__top__20  text__center">
          <button className="background__default rounded text__small border__remove padding__horizontal__20 padding__vertical__5 text__muted">
            {" "}
            ورود
          </button>
        </div>
      </div>
    </div>
  </div> */}
    </div>
  );
};

export { RegisterTemplate };
