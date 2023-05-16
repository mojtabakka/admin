import React from "react";
import { Button, Card, Input } from "components";
import { Link } from "react-router-dom";
import { PATHS } from "config/routes.config";
import {
  NAME,
  lAST_NAME,
  EMAIL,
  PASSWORD,
  CONFIRM_PASSWORD,
  NATIONAL_CODE,
  PHONE_NUMBER,
  USERNAME,
} from "./Register.config";
import { Grid } from "@mui/material";

const RegisterTemplate = ({ onRegister, isLoading }) => {
  return (
    <div className=" h-screen  mt-20  p-14 ">
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
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div className="py-1">
                  <Input
                    className="w-3/4"
                    label="نام"
                    tabIndex={1}
                    name={NAME}
                  />
                </div>

                <div className="py-1">
                  <Input
                    className="w-3/4"
                    label="نام خانوادگی"
                    tabIndex={2}
                    name={lAST_NAME}
                  />
                </div>

                <div className="py-1">
                  <Input
                    className="w-3/4"
                    label="شماره ملی"
                    tabIndex={3}
                    name={NATIONAL_CODE}
                  />
                </div>
                <div className="py-1">
                  <Input
                    className="w-3/4"
                    label="شماره تماس"
                    tabIndex={4}
                    name={PHONE_NUMBER}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="py-1">
                  <Input
                    className="w-3/4"
                    label="نام کاربری"
                    tabIndex={5}
                    name={USERNAME}
                  />
                </div>
                <div className="py-1">
                  <Input
                    className="w-3/4"
                    label="ایمیل"
                    tabIndex={6}
                    name={EMAIL}
                  />
                </div>
                <div className="py-1">
                  <Input
                    className="w-3/4"
                    label="رمزعبور"
                    tabIndex={7}
                    type="password"
                    name={PASSWORD}
                  />
                </div>
                <div className="py-2">
                  <Input
                    className="w-3/4"
                    label="تکرار رمز عبور"
                    tabIndex={8}
                    type="password"
                    name={CONFIRM_PASSWORD}
                  />
                </div>
              </Grid>
            </Grid>
          </Card>

          <div className="text-center p-2  underline text-black">
            <Link to={PATHS.login} > ورود</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export { RegisterTemplate };
