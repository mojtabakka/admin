import React from "react";
import { Button, Card } from "components";
import { Link } from "react-router-dom";
import { PATHS } from "config/routes.config";

const LoginTemplate = ({ onLogin }) => {
  return (
    <div className=" flex__center felxt  text__bold w-100 vh-100 ">
      <div>
        <Card
          headerTitle="صفحه ورود"
          showFooter
          footer={() => <Button onClick={onLogin}>ورود</Button>}
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
        </Card>
        <div className="text-center p-2  text-decoration-underline text-black">
          <Link to={PATHS.register}>ثبت نام</Link>
        </div>
      </div>
    </div>
  );
};

export { LoginTemplate };
