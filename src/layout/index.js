import React from "react";
import layoutTypes from "./comonents";
const AppLayout = ({ children, layoutItems }) => {
  const Layout = layoutTypes.filter(
    (item) => item.name.toLowerCase() === layoutItems.type.toLowerCase()
  )[0].layout;
  
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

export default AppLayout;
