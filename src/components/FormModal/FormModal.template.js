import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Card, Button } from "components";

const FormModalTemplate = ({
  isLoading,
  onClose,
  onSubmit,
  open,
  children,
  title,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <div className="w-100 vh-100 flex__center margin__top__20 h-100 bg-black">
          <div className="w-50 text-center ">
            <Card headerTitle={title}>
              <form onSubmit={onSubmit} className="white-100">
                {children}
                <div className="text__left margin__horizontal__20 margin__vertical__20">
                  <Button
                    isLoading={isLoading}
                    variant="danger"
                    className="mx-3"
                    onClick={onClose}
                  >
                    انصراف
                  </Button>
                  <Button type="submit" isLoading={isLoading}>
                    تایید
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export { FormModalTemplate };
