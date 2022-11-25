import { PATHS } from "./routes.config";

// auth controller
export const LOGIN__POST__LOGIN = "/auth/login";
export const REGISTER__POST__REGISTER = "/auth/register";
export const LOGOUT__POST__LOGOUT = "/auth/logout";

// product controller
export const PRODUCT = "/product/product";

//user controller
export const USER = "/user/user";
export const DONT_NEEDED_URLS_FOR_AUTHENTICATION = () => [
  { url: "/auth" + PATHS.login },
  { url: "/auth" + PATHS.register },
];
