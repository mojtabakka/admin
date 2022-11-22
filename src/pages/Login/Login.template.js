import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, PreLoading } from "components";
import { PATHS } from "config/routes.config";
import { PASSWORD, EMAIL } from "./Login.config";

const LoginTemplate = ({ onSubmit, isLoading }) => {
  return (
    <div className=" flex__center   text__bold w-100 vh-100 ">
      <div>
        <form onSubmit={onSubmit}>
          <Card
            headerTitle="صفحه ورود"
            showFooter
            footer={() => (
              <Button isLoading={isLoading} type="submit">
                ورود
              </Button>
            )}
          >
            <div>
              <label className="padding__10  text__bold">ایمیل </label>
              <input
                name={EMAIL}
                type="email"
                className=" text__right input__default  background__muted"
              />
            </div>
            <div>
              <label className="padding__10">رمز عبور </label>
              <input
                name={PASSWORD}
                className=" text__right input__default  background__muted"
                type="password"
              />
            </div>
          </Card>
        </form>
        <div className="text-center p-2  text-decoration-underline text-black">
          <Link to={PATHS.register}>ثبت نام</Link>
        </div>
      </div>
    </div>
  );
};

export { LoginTemplate };