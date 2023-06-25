import { PATHS } from "./routes.config";

// auth controller
export const LOGIN__POST__LOGIN = "/auth/admin/login";
export const REGISTER__POST__REGISTER = "/auth/admin/register";
export const LOGOUT__POST__LOGOUT = "/auth/logout";

// product controller
export const PRODUCT = "/product";
export const GET_PRODUCT = "/product/:id";
export const UPLOAD_PRODUCT_IMAGE_POST = "/product/upload-product-image";

//order Controller
export const ORDER = "/orders";
export const GET_ORDER = "/orders/:id";
export const CHANGE_ORDER_STATUS = "orders/change-order-status/:id";
export const SEARCH_ORDER = "orders/search-order-admin";

//user controllernpm
export const USER = "/users";
export const UPLOAD_USER_IMG = "/user/upload-image";
export const GET_USER_IMG = "/user/user-image";

//type controller
export const TYPE = "/type";
export const BRAND_POST = "/type/add-brand";
export const GET_BRANDS = "/type/get-brands";
export const POST_CAT = "/type/cat";
export const GET_CAT = "/type/get-cat";
export const GET_CATS = "/type/get-cats";
export const ADD_PROPERTY = "/type/add-property";
export const PROPERIIES_GET = "/type/get-properties";

export const DONT_NEEDED_URLS_FOR_AUTHENTICATION = () => [
  { url: "/auth" + PATHS.login },
  { url: "/auth" + PATHS.register },
];
