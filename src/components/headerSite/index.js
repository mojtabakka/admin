import { PATHS } from "config/sibarMenu.config";
import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/actions/Auth.action";
import { HeaderSiteTemplate } from "./HeaderSite.template";

const HeaderSiteComponent = (props) => {
  const navigate = useNavigate();
  const { logout } = props;
  const [user, setUser] = useState({});
  const [hideDropDown, setHideDropDown] = useState(true);
  const handleShowDropDown = () => setHideDropDown(!hideDropDown);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const handleLogout = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = {
        token: user.token,
      };
      await logout(data);
      navigate(PATHS.login);
      localStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HeaderSiteTemplate
      hideDropDown={hideDropDown}
      onShowDropDown={handleShowDropDown}
      onLogout={handleLogout}
      user={user}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: (data) => dispatch(logout(data)),
});
const HeaderSite = connect(null, mapDispatchToProps)(HeaderSiteComponent);
export { HeaderSite };
