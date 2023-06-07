import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Card, Button } from "components";

const FormModalTemplate = ({
  showSubmitButton,
  isLoading,
  onClose,
  onSubmit,
  open,
  children,
  title,
  size = "medium",
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <div className="w-full h-screen  text-center  flex  content-center  items-center">
          <span className=" text-center  w-full ">
            <Card
              headerTitle={title}
              className={` 
            
              ${size === "medium" && "w-1/2"} 
              ${size === "large" && "w-3/4"}
              ${size === "samll" && "w-1/3"}   h-full inline-block`}
            >
              <form onSubmit={onSubmit} className="white-100">
                {children}
                <div className="text-left mx-2 mt-4">
                  <Button
                    isLoading={isLoading}
                    variant="danger"
                    className="mx-3"
                    onClick={onClose}
                  >
                    بستن
                  </Button>

                  {showSubmitButton && (
                    <Button type="submit" isLoading={isLoading}>
                      تایید
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </span>
        </div>
      </Box>
    </Modal>
  );
};

export { FormModalTemplate };
