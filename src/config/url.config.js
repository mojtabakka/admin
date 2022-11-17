import { PATHS } from "./routes.config";

export const LOGIN__POST__LOGIN = "/auth/login";
export const REGISTER__POST__REGISTER = "/auth/register";

export const DONT_NEEDED_URLS_FOR_AUTHENTICATION = () => [
  { url: "/auth" + PATHS.login },
  { url: "/auth" + PATHS.register },
];
