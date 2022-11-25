import { ErrorBoundary } from "components";
import React from "react";
import { HomeTemplate } from "./Home.template";

const Home = () => {
  return (
    <ErrorBoundary>
      <HomeTemplate />
    </ErrorBoundary>
  );
};

export { Home };
