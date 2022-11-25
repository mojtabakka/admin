import React from "react";
import { Popover } from "@mui/material";
// import { PERSONAL__PROPERTIES } from "./HeaderSite.config";
// import * as CgIcons from "react-icons/cg";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import * as MdIcons from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "config/routes.config";
// import { items } from "config/sibarMenu.config";
// import DropDown from "../../dropdown";
// import logo from "../../../asset/logo/abank-logo.6cb94f8f.png";
// const dropdownItems = [
//   { label: "DashBoard", path: "/dashboard" },
//   { label: "Item1", path: "/item1 " },
//   { label: "Item2", path: "/item2 " },
// ];

// const setting = {
//   backgroundColor: "#08A45C",
//   textColor: "white",
// };
const HeaderSiteTemplate = ({
  hideDropDown,
  onAbort,
  onLogout,
  onShowDropDown,
  user,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="px-2">
      <div
        className="p-3 rounded d-flex justify-content-between   background__white text__bold "
        style={{ boxShadow: "0px 1px 2px 0px rgb(21 27 38 / 15%)" }}
      >
        <div>سایت تستی</div>
        <div>فروشگاه دوربین</div>
        <div>
          <div
            id="dropdownDefault"
            onClick={onShowDropDown}
            data-dropdown-toggle="dropdown"
            type="button"
          >
            <span
              className="px-2"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              <span>
                <MdIcons.MdKeyboardArrowDown className="inline-block" />
                <span> {user.name}</span>
                <span> {user.lastName} </span>
              </span>
              <span></span>
            </span>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className="p-4 background__muted">
                <div className="text-center pb-4 cursor__pointer">
                  <Link to={PATHS.editProfile}>
                    <span className="!text__bold ">ویرایش</span>
                    <span className="px-2">
                      <EditIcon />
                    </span>
                  </Link>
                </div>
                <div className="text-center cursor__pointer" onClick={onLogout}>
                  <span className="px-2">خروج</span>
                  <span>
                    <LogoutIcon />
                  </span>
                </div>
              </div>
            </Popover>
            <span className="w-10 p-2 h-10 rounded inline-block text-center">
              {/* <CgIcons.CgProfile className=" h5  inline-block" /> */}
            </span>
          </div>
          <div
            className={`${hideDropDown ? "hidden" : null}`}
            onAbort={onAbort}
          >
            {/* <DropDown items={items} setting={setting} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderSiteTemplate };
