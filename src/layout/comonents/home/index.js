import React from "react";
import { Sidebar, HeaderSite } from "components";

const Home = ({ children }) => {
  return (
    <div dir="rtl" className=" flex w-full">
      <Sidebar />
      <div className=" w-full">
        <div>{/* <HeaderSite /> */}</div>
        <div className="p-3 overflow-y-scroll"> {children}</div>
      </div>
    </div>
  );
};

export default Home;
