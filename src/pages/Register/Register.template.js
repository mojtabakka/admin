import React from "react";
import { Button, Card } from "components";
import { Link } from "react-router-dom";
import { PATHS } from "config/routes.config";

const RegisterTemplate = ({onRegister}) => {
  return (
    <div className=" position-fixed w-100 h-100   rounded  flex__center  text__bold ">
      <div>
        <Card
          headerTitle="صفحه ثبت نام"
          showFooter
          footer={() => (
            <>
              <Button onClick={onRegister}>ثبت نام</Button>
            </>
          )}
        >
          <div>
            <label className="padding__10  text__bold ">نام کاربری </label>
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

        <div className="text-center p-2  text-decoration-underline text-black">
          <Link to={PATHS.login}> ورود</Link>
        </div>
      </div>
    </div>
  );
};

export { RegisterTemplate };
