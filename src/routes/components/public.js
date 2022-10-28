import React from "react";
import AppLayout from "layout";

const Public = ({ component: Component, layout }) => {
  return (
    <AppLayout layoutItems={layout}>
      <Component />
    </AppLayout>
  );
};

export { Public };
