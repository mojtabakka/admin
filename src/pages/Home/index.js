import { ErrorBoundary } from "components";
import React from "react";
import { useEffect } from "react";
import { HomeTemplate } from "./Home.template";

const Home = () => {
  useEffect(() => {});
  return (
    <ErrorBoundary>
      <HomeTemplate />
    </ErrorBoundary>
  );
};

export { Home };
