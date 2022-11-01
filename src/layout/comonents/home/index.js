import React from "react";
import { Sidebar, HeaderSite } from "components";

const Home = ({ children }) => {
  return (
    <div dir="rtl" className=" w-100 h-100 d-flex ">
      <Sidebar />
      <div className=" w-100 flex-grow-1">
        <div>
          <HeaderSite />
        </div>
        <div className="p-3"> {children}</div>
      </div>
    </div>
  );
};

export default Home;
