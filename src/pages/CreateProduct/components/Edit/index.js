import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadProductImage } from "redux/actions/Product.action";
import { EditTemplate } from "./Edit.template";

const EditComponent = (props) => {
  const [photo, setPhoto] = useState();
  const hnadleEdit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    const dataChangedToArray = Object.entries(data);
    const dataMaped = dataChangedToArray.map(([key, value]) => {
      const searchedValue = key.search("_feature");
      if (searchedValue !== -1) {
        return { title: key, value: value };
      }
    });

    const dataFiltered = dataMaped.filter((item) => {
      const searchedValue = item?.title.search("_feature");
      if (searchedValue) {
        item.title = item?.title.replace("_feature", "");
        return item;
      }
    });

    data.features = dataFiltered;
    data.photo = photo;
    props.onEdit(data);
  };

  const handleChangeFile = async (file) => {
    const { uploadProductImage } = props;
    const formData = new FormData();
    formData.append("photo", file);
    const uploadedPhoto = await uploadProductImage(formData);
    setPhoto(uploadedPhoto.data.src);
  };

  const handleCanclePhtoto = () => {
    setPhoto(null);
  };
  return (
    <EditTemplate
      {...props}
      photo={photo}
      onEdit={hnadleEdit}
      onChangeFile={handleChangeFile}
      onCanclePhtoto={handleCanclePhtoto}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  uploadProductImage: (data) => dispatch(uploadProductImage(data)),
});

const Edit = connect(null, mapDispatchToProps)(EditComponent);

export { Edit };
