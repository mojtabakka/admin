import React from "react";
import UploadIcon from "@mui/icons-material/Upload";
import CancelIcon from "@mui/icons-material/Cancel";
import style from "./FileInput.module.scss";
import { BASE_URL } from "config/variables.config";
const FileInputTemplate = ({
  fileInputRef,
  photo,
  onClickInputFile,
  onClickCancleUploadImage,
  onChangeFile,
}) => {
  return (
    <div>
      <div className="py-1">
        <label>عکس</label>
        <div
          onClick={onClickInputFile}
          className=" cursor-pointer bg-blue-300 text-white  p-2 rounded border border-dark"
        >
          <div className="  justify-between flex items-center ">
            <span className="text-white font-bold">
              عکس مورد نظر را انتخاب کنید
            </span>
            {!photo ? (
              <UploadIcon />
            ) : (
              <div className=" position-relative">
                <img
                  alt={photo}
                  src={BASE_URL + photo}
                  width={50}
                  height={50}
                  className=" rounded-full"
                />
                <div
                  className=" position-absolute"
                  style={{ top: "-7px", left: "-7px" }}
                  onClick={onClickCancleUploadImage}
                >
                  <CancelIcon />
                </div>
              </div>
            )}
          </div>
        </div>
        <input
          type="file"
          name="photo"
          onChange={onChangeFile}
          className={style.file_input}
          ref={fileInputRef}
        />
      </div>
    </div>
  );
};

export { FileInputTemplate };
