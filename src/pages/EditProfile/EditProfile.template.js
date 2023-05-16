import React from "react";
import { Button, Card, Input } from "components";
import { Grid } from "@mui/material";

import {
  NAME,
  lAST_NAME,
  EMAIL,
  NATIONAL_CODE,
  PHONE_NUMBER,
  USERNAME,
} from "./EditProfile.config";

const EditProfileTemplate = ({
  isLoading,
  onChangeFile,
  onEdit,
  avatar,
  user,
}) => {
  return (
    <div className="mt-14 ">
      <form onSubmit={onEdit}>
        <div>
          <Card
            avatar={{ ...avatar }}
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
                  <Input
                    label={"نام"}
                    className="w-1/2"
                    tabIndex={1}
                    name={NAME}
                    defaultValue={user[NAME]}
                  />
                </div>

                <div className="py-1">
                  <Input
                    label={"نام خانوادگی"}
                    className="w-1/2"
                    tabIndex={2}
                    name={lAST_NAME}
                    defaultValue={user[lAST_NAME]}
                  />
                </div>

                <div className="py-1">
                  <Input
                    label={"شماره ملی"}
                    tabIndex={3}
                    className="w-1/2"
                    name={NATIONAL_CODE}
                    defaultValue={user[NATIONAL_CODE]}
                    type="number"
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="py-1">
                  <Input
                    label="شماره تماس"
                    tabIndex={4}
                    className="w-1/2"
                    name={PHONE_NUMBER}
                    defaultValue={user[PHONE_NUMBER]}
                    type="number"
                  />
                </div>
                <div className="py-1">
                  <Input
                    label={"نام کاربری"}
                    tabIndex={5}
                    className="w-1/2"
                    name={USERNAME}
                    defaultValue={user[USERNAME]}
                  />
                </div>
                <div className="py-1">
                  
                  <Input
                  label={"ایمیل"}
                    tabIndex={6}
                    className="w-1/2"
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
