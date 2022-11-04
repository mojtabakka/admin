import React from "react";
import AppLayout from "layout";

const Protected = ({ component: Component, layout }) => {
  return (
    <AppLayout layoutItems={layout}>
      <Component />
    </AppLayout>
  );
};

export { Protected };
