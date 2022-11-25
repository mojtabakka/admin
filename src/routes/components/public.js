import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { PATHS } from "config/routes.config";
import { ACCESS_TOKEN } from "config/variables.config";
import AppLayout from "layout";

const Public = ({ component: Component, layout, ifIsLoginGoBack }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = JSON.parse(user)?.token;
    if (ifIsLoginGoBack && token && jwtDecode(token).exp > Date.now() / 1000)
      navigate(PATHS.home);
  });
  return (
    <AppLayout layoutItems={layout}>
      <Component />
    </AppLayout>
  );
};

export { Public };
