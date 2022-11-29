import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { EditProfileTemplate } from "./EditProfile.template";
import { ErrorBoundary } from "components";
import {
  getUser,
  updateUser,
  uploadUserImage,
} from "redux/actions/User.action";

const EditProfilePage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    getLoginUser();
  }, []);

  const getLoginUser = async () => {
    setIsLoading(true);
    const { getUser } = props;
    try {
      const user = await getUser();
      setUser(user.data);
    } catch (error) {
      console.log("eeror", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleEdit = async (e) => {
    const { updateUser } = props;
    setIsLoading(true);
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    try {
      await updateUser(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeFile = async (e) => {
    const { uploadUserImage } = props;
    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    console.log(formData);

    await uploadUserImage(formData);
  };
  return (
    <ErrorBoundary>
      <EditProfileTemplate
        {...props}
        isLoading={isLoading}
        user={user}
        onEdit={handleEdit}
        onChangeFile={handleChangeFile}
      />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  updateUser: (data) => dispatch(updateUser(data)),
  uploadUserImage: (data) => dispatch(uploadUserImage(data)),
});
const EditProfile = connect(null, mapDispatchToProps)(EditProfilePage);
export { EditProfile };
