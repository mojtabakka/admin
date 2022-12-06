import React from "react";
import { FileInput, FormModal } from "components";
import { LENZ, BORD } from "../../CreateProduct.config";

const EditTemplate = ({
  open,
  onCloseModal,
  productInfo,
  onEdit,
  isLoading,
  onChangeFile,
  photo,
  onCanclePhtoto,
}) => {
  return (
    <FormModal
      open={open}
      onClose={onCloseModal}
      onSubmit={onEdit}
      isLoading={isLoading}
      title="ویرایش"
    >
      <FileInput
        onChange={onChangeFile}
        photo={photo}
        onCancle={onCanclePhtoto}
      />
      <div className="py-1">
        <label>نام برد </label>
        <input
          tabIndex={1}
          className=" text__right input__default  background__muted"
          name={BORD}
          defaultValue={productInfo[BORD]}
        />
      </div>
      <div className="py-1">
        <label>نام لنز </label>
        <input
          tabIndex={1}
          className=" text__right input__default  background__muted"
          name={LENZ}
          defaultValue={productInfo[LENZ]}
        />
      </div>
    </FormModal>
  );
};

export { EditTemplate };
