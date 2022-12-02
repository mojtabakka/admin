import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { EditProfileTemplate } from "./EditProfile.template";
import { ErrorBoundary } from "components";
import {
  getUser,
  updateUser,
  uploadUserImage,
  getUserPhoto,
} from "redux/actions/User.action";
import { BASE_URL } from "config/variables.config";

const EditProfilePage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    getLoginUser();
  }, []);

  const getLoginUser = async () => {
    setIsLoading(true);
    const { getUser } = props;

    try {
      const result = await getUser();
      const user = result.data;
      setUser({ ...user });
      if (user.avatar) {
        const avatar = {
          title: user?.name + " " + user?.lastName,
          src: BASE_URL + user?.avatar,
        };
        setAvatar({ ...avatar });
      }
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
    try {
      await uploadUserImage(formData);
      getLoginUser();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <ErrorBoundary>
      <EditProfileTemplate
        {...props}
        isLoading={isLoading}
        user={user}
        avatar={avatar}
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
  getUserPhoto: () => dispatch(getUserPhoto()),
});
const EditProfile = connect(null, mapDispatchToProps)(EditProfilePage);
export { EditProfile };
