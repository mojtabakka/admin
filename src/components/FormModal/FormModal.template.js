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
      <div className="w-full h-screen  text-center  flex  content-center  items-center">
        <span className=" text-center  w-full ">
          <Card headerTitle={title} className=" w-1/2 inline-block">
            <form onSubmit={onSubmit} className="white-100">
              {children}
              <div className="text-left mx-2 mt-4">
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
        </span>
      </div>

      {/* <div class="flex items-center align-middle ...">
        <div class="flex-1 w-full text-center">lskjfl;akjsf;lj</div>
      </div> */}
    </Modal>
  );
};

export { FormModalTemplate };
