import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const ConfirmModalTemplate = ({
  onCloseConfirmModal,
  onDisagree,
  open,
  content,
  header,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onCloseConfirmModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDisagree}>بله</Button>
          <Button onClick={onCloseConfirmModal} autoFocus>
            خیر
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { ConfirmModalTemplate };
