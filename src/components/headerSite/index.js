import React, { useState } from "react";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import { items } from "../../../confing/sibarMenueConfig";
import DropDown from "../../dropdown";
import logo from "../../../asset/logo/abank-logo.6cb94f8f.png";
const setting = {
  backgroundColor: "#08A45C",
  textColor: "white",
};
const HeaderSite = () => {
  const [hideDropDown, setHideDropDown] = useState(true);
  const showDropDown = () => setHideDropDown(!hideDropDown);
  return (
    <div
      className="p-4 rounded-lg flex justify-between shadow shadow-white "
      style={{
        boxShadow: "2px 2px 10px gray",
        color: "white",
        backgroundColor: "#08A45C",
      }}
    >
      <div>
        <img width={90} src={logo} />
      </div>
      <div>
        <button
          id="dropdownDefault"
          onClick={showDropDown}
          data-dropdown-toggle="dropdown"
          type="button"
        >
          <MdIcons.MdKeyboardArrowDown className="inline-block m-2" />
          <span className="inline-block">mojtaba Karimi</span>
          <div className="w-10 h-10rounded-full inline-block">
            <CgIcons.CgProfile className="text-3xl inline-block " />
          </div>
        </button>
        <div className={`${hideDropDown ? "hidden" : null}`}>
          <DropDown items={items} setting={setting} />
        </div>
      </div>
    </div>
  );
};

export default HeaderSite;
