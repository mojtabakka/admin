import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Input } from "components";
import { PATHS } from "config/routes.config";
import { PASSWORD, USERNAME } from "./Login.config";

const LoginTemplate = ({ onSubmit, isLoading }) => {
  return (
    <div className="  flex h-screen w-full">
      <div className="m-auto">
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
            <div className="">
              <Input label="ایمیل" name={USERNAME} type="text" />
            </div>
            <div>
              <Input
                label="رمز عبور"
                name={PASSWORD}
                className=" text-small"
                type="password"
              />
            </div>
          </Card>
        </form>
        <div className="text-center p-2 underline text-black">
          <Link to={PATHS.register}>ثبت نام</Link>
        </div>
      </div>
    </div>
  );
};

export { LoginTemplate };
