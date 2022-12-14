import React from "react";
import { Button, Card } from "components";
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
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div className="py-1">
                  <label>نام </label>
                  <input
                    tabIndex={1}
                    className=" text__right input__default  background__muted"
                    name={NAME}
                  />
                </div>

                <div className="py-1">
                  <label>نام خانوادگی </label>
                  <input
                    tabIndex={2}
                    className=" text__right input__default  background__muted"
                    name={lAST_NAME}
                  />
                </div>

                <div className="py-1">
                  <label>شماره ملی</label>
                  <input
                    tabIndex={3}
                    className=" text__right input__default  background__muted"
                    name={NATIONAL_CODE}
                  />
                </div>
                <div className="py-1">
                  <label>شماره تماس</label>
                  <input
                    tabIndex={4}
                    className=" text__right input__default  background__muted"
                    name={PHONE_NUMBER}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="py-1">
                  <label>نام کاربری </label>
                  <input
                    tabIndex={5}
                    className=" text__right input__default  background__muted"
                    name={USERNAME}
                  />
                </div>
                <div className="py-1">
                  <label>ایمیل</label>
                  <input
                    tabIndex={6}
                    className=" text__right input__default  background__muted"
                    name={EMAIL}
                  />
                </div>
                <div className="py-1">
                  <label>رمز عبور </label>
                  <input
                    tabIndex={7}
                    className=" text__right input__default  background__muted"
                    type="password"
                    name={PASSWORD}
                  />
                </div>
                <div className="py-2">
                  <label>تکرار رمز عبور </label>
                  <input
                    tabIndex={8}
                    className=" text__right input__default  background__muted"
                    type="password"
                    name={CONFIRM_PASSWORD}
                  />
                </div>
              </Grid>
            </Grid>
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
