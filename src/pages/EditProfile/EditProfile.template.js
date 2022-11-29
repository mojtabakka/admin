import React from "react";
import { Button, Card } from "components";
import { Grid } from "@mui/material";
import {
  NAME,
  lAST_NAME,
  EMAIL,
  NATIONAL_CODE,
  PHONE_NUMBER,
  USERNAME,
} from "./EditProfile.config";

const EditProfileTemplate = ({ onEdit, isLoading, user, onChangeFile }) => {
  return (
    <div className="mt-5 ">
      <form onSubmit={onEdit}>
        <div>
          <Card
            avatar={{ src: null }}
            fileUpload={true}
            showHeader={false}
            showFooter
            onChangeFile={onChangeFile}
            footer={() => (
              <>
                <Button type="submit" isLoading={isLoading}>
                  ویرایش
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
                    defaultValue={user[NAME]}
                  />
                </div>

                <div className="py-1">
                  <label>نام خانوادگی </label>
                  <input
                    tabIndex={2}
                    className=" text__right input__default  background__muted"
                    name={lAST_NAME}
                    defaultValue={user[lAST_NAME]}
                  />
                </div>

                <div className="py-1">
                  <label>شماره ملی</label>
                  <input
                    tabIndex={3}
                    className=" text__right input__default  background__muted"
                    name={NATIONAL_CODE}
                    defaultValue={user[NATIONAL_CODE]}
                    type="number"
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="py-1">
                  <label>شماره تماس</label>
                  <input
                    tabIndex={4}
                    className=" text__right input__default  background__muted"
                    name={PHONE_NUMBER}
                    defaultValue={user[PHONE_NUMBER]}
                    type="number"
                  />
                </div>
                <div className="py-1">
                  <label>نام کاربری </label>
                  <input
                    tabIndex={5}
                    className=" text__right input__default  background__muted"
                    name={USERNAME}
                    defaultValue={user[USERNAME]}
                  />
                </div>
                <div className="py-1">
                  <label>ایمیل</label>
                  <input
                    tabIndex={6}
                    className=" text__right input__default  background__muted"
                    name={EMAIL}
                    defaultValue={user[EMAIL]}
                  />
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>
      </form>
    </div>
  );
};

export { EditProfileTemplate };
