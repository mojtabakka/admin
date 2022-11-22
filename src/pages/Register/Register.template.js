import React from "react";
import { Button, Card } from "components";
import { Link } from "react-router-dom";
import { PATHS } from "config/routes.config";
import { NAME, EMAIL, PASSWORD, CONFIRM_PASSWORD } from "./Register.config";

const RegisterTemplate = ({ onRegister, isLoading }) => {
  return (
    <div className=" position-fixed w-100 h-100   rounded  flex__center  text__bold ">
      <form onSubmit={onRegister}>
        <div>
          <Card
            headerTitle="صفحه ثبت نام"
            showFooter
            footer={() => (
              <>
                <Button type="submit" isLoading={isLoading}>
                  ثبت نام
                </Button>
              </>
            )}
          >
            <div>
              <label className="padding__10  text__bold ">نام کاربری </label>
              <input
                className=" text__right input__default  background__muted"
                name={NAME}
              />
            </div>
            <div>
              <label className="padding__10  text__bold ">ایمیل</label>
              <input
                className=" text__right input__default  background__muted"
                name={EMAIL}
              />
            </div>
            <div>
              <label className="padding__10">رمز عبور </label>
              <input
                className=" text__right input__default  background__muted"
                type="password"
                name={PASSWORD}
              />
            </div>
            <div>
              <label className="padding__10">تکرار رمز عبور </label>
              <input
                className=" text__right input__default  background__muted"
                type="password"
                name={CONFIRM_PASSWORD}
              />
            </div>
          </Card>

          <div className="text-center p-2  text-decoration-underline text-black">
            <Link to={PATHS.login}> ورود</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export { RegisterTemplate };
