import React from "react";
import { Sidebar, HeaderSite } from "components";

const Home = ({ children }) => {
  return (
    <div dir="rtl" className=" w-full h-full flex ">
      <Sidebar />
      <div className=" w-full">
        <div>
          <HeaderSite />
        </div>
        <div className="p-3"> {children}</div>
      </div>
    </div>
  );
};

export default Home;
