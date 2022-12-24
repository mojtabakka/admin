import { TextField } from "@mui/material";
import { FormModal } from "components";
import React from "react";

const AddInputModalTemplate = ({ open, onCloseModal, onSubmit, isLoading }) => {
  return (
    <FormModal
      open={open}
      onClose={onCloseModal}
      onSubmit={onSubmit}
      isLoading={isLoading}
      title="افزودن فیلد"
    >
      <div>
        <label className=" mb-2 block">نام فیلد </label>
        <TextField
          tabIndex={1}
          className=" text-right  w-full"
          name="title"
          size="small"
        />
      </div>
    </FormModal>
  );
};

export default AddInputModalTemplate;
