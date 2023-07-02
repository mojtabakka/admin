import React from "react";
import UploadIcon from "@mui/icons-material/Upload";
import CancelIcon from "@mui/icons-material/Cancel";
import style from "./FileInput.module.scss";
const FileInputTemplate = ({
  fileInputRef,
  photo,
  onClickInputFile,
  onClickCancleUploadImage,
  onChangeFile,
  label,
}) => {
  return (
    <div>
      <div className="py-1 ">
        <div
          onClick={onClickInputFile}
          className=" cursor-pointer bg-blue-300 text-white  p-2  border border-dark rounded-3xl"
        >
          <span className="  justify-between flex items-center ">
            <span className="text-white font-bold">{label}</span>
            {!photo && <UploadIcon />}
          </span>
        </div>

        {photo && (
          <div className=" relative ">
            <img
              alt={photo}
              src={photo}
              width={50}
              height={50}
              className=" rounded-full "
            />
            <div
              className="  absolute top-4"
              style={{ top: " 25px", right: "32px" }}
              onClick={onClickCancleUploadImage}
            >
              <CancelIcon className="cursor-pointer" />
            </div>
          </div>
        )}
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
