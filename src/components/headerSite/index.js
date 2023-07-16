import { PATHS } from "config/sibarMenu.Config";
import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/actions/Auth.action";
import { HeaderSiteTemplate } from "./HeaderSite.template";
import { PATHS as ROUTEPATH } from "config/routes.config";

const HeaderSiteComponent = (props) => {
  const navigate = useNavigate();
  const { logout } = props;
  const [anchorEl, setAnchorEl] = useState(null);
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
    } finally {
      setAnchorEl(null);
    }
  };

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setAnchorEl(null);
    navigate(ROUTEPATH.editProfile);
  };
  return (
    <HeaderSiteTemplate
      hideDropDown={hideDropDown}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onShowDropDown={handleShowDropDown}
      onLogout={handleLogout}
      user={user}
      onEdit={handleEdit}
      onPopoverClick={handlePopoverClick}
      onClosePopover={handleClosePopover}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: (data) => dispatch(logout(data)),
});
const HeaderSite = connect(null, mapDispatchToProps)(HeaderSiteComponent);
export { HeaderSite };
