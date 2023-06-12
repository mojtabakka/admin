import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FormModal } from "components";
import { ORDER_STATUS } from "config/general.config";
import React from "react";

const ChangeStatustemplate = ({ open, onClose, onSubmit, size, onChange }) => {
  return (
    <FormModal
      size={size}
      open={open}
      title="تغییر وضعیت"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <div className=" w-96   border  rounded-lg">
        <div className="bg-gray-100 w-full p-2">تغییر وضعیت</div>
        <div className="p-10">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">وضیعت</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={onChange}
            >
              <MenuItem value={ORDER_STATUS.notPayed.value}>
                {ORDER_STATUS.notPayed.text}
              </MenuItem>
              <MenuItem value={ORDER_STATUS.payed.value}>
                {" "}
                {ORDER_STATUS.payed.text}
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </FormModal>
  );
};

export default ChangeStatustemplate;
