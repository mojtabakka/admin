import { PATHS } from "config/sibarMenu.config";
import { ACCESS_TOKEN } from "config/variables.config";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/actions/Auth.action";
import { HeaderSiteTemplate } from "./HeaderSite.template";

const HeaderSiteComponent = (props) => {
  const navigate = useNavigate();
  const { logout } = props;
  const [hideDropDown, setHideDropDown] = useState(true);
  const handleShowDropDown = () => setHideDropDown(!hideDropDown);
  const handleLogout = async () => {
    try {
      const data = {
        token: localStorage.getItem(ACCESS_TOKEN),
      };
      await logout(data);
      navigate(PATHS.login);
      localStorage.removeItem(ACCESS_TOKEN);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HeaderSiteTemplate
      hideDropDown={hideDropDown}
      onShowDropDown={handleShowDropDown}
      onLogout={handleLogout}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: (data) => dispatch(logout(data)),
});
const HeaderSite = connect(null, mapDispatchToProps)(HeaderSiteComponent);
export { HeaderSite };
