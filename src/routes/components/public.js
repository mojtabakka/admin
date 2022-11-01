import React from "react";
import AppLayout from "layout";

const Public = ({ component = null, layout }) => {
  return <AppLayout layoutItems={layout}>{component}</AppLayout>;
};

export { Public };
