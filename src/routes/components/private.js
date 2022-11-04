import React from "react";
import AppLayout from "layout";

const Private = ({ component: Component, layout }) => {
  return (
    <AppLayout layoutItems={layout}>
      <Component />
    </AppLayout>
  );
};

export { Private };
