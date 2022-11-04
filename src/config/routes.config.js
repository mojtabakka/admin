import * as pages from "pages";
export const ROUTES_TYPES = {
  PROTECTED: "protected",
  PUBLIC: "public",
  PRIVATE: "private",
};

export const PATHS = {
  home: "/",
  login: "/login",
  register: "/register",
};
export const RoutesConfig = [
  {
    path: PATHS.home,
    name: "home",
    // component : pages.Home,
    layout: {
      type: "login",
    },
    type: ROUTES_TYPES.PRIVATE,
  },
  {
    path: PATHS.login,
    name: "login",
    component : pages.Login,
    layout: {
      type: "login",
    },
    type: ROUTES_TYPES.PRIVATE,
  },
  {
    path: PATHS.register,
    name: "login",
    // component : pages.EnterPassword,
    layout: {
      type: "login",
    },
    type: ROUTES_TYPES.PUBLIC,
  },
];