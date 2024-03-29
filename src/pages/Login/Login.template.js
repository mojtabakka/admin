import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Input } from "components";
import { PATHS } from "config/routes.config";
import { PASSWORD, PHONE_NUMBER, USERNAME } from "./Login.config";

const LoginTemplate = ({ onSubmit, isLoading }) => {

  const alpha = new Set([1,2,3,4,5,6,7,8,8]);
  console.log(alpha);
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
              <Input label="شماره تماس" name={PHONE_NUMBER} type="number" />
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
