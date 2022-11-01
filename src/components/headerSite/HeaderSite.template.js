import React from "react";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
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
const HeaderSiteTemplate = ({ onAbort, hideDropDown, onShowDropDown }) => {
  return (
    <div
      className="p-3 rounded d-flex justify-content-between shadow shadow-white "
      style={{
        boxShadow: "2px 2px 10px gray",
        color: "white",
        backgroundColor: "#08A45C",
      }}
    >
      <div>
        hello
        {/* <img width={90} src={logo} /> */}
      </div>
      <div>
        <div
          id="dropdownDefault"
          onClick={onShowDropDown}
          data-dropdown-toggle="dropdown"
          type="button"
        >
          <span className="px-2">
            <MdIcons.MdKeyboardArrowDown className="inline-block" />
          </span>
          <span className="inline-block">mojtaba Karimi</span>
          <span className="w-10 p-2 h-10 rounded inline-block text-center">
            {/* <CgIcons.CgProfile className=" h5  inline-block" /> */}
          </span>
        </div>
        <div className={`${hideDropDown ? "hidden" : null}`} onAbort={onAbort}>
          {/* <DropDown items={items} setting={setting} /> */}
        </div>
      </div>
    </div>
  );
};

export { HeaderSiteTemplate };
