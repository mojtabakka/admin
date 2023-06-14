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
  createProduct: "/create-product",
  editProfile: "/edit-profile",
  orders: "/orders",
  createProductCat: "/create-product-cat",
  productTypes: "/product-types",
  brands: "/brands",
};

export const RoutesConfig = [
  {
    path: PATHS.home,
    name: "home",
    component: pages.Home,
    layout: {
      type: "home",
    },
    type: ROUTES_TYPES.PRIVATE,
  },

  {
    path: PATHS.brands,
    name: "brands",
    component: pages.Brand,
    layout: {
      type: "home",
    },
    type: ROUTES_TYPES.PRIVATE,
  },

  {
    path: PATHS.createProduct,
    name: "createProduct",
    component: pages.CreateProduct,
    layout: {
      type: "home",
    },
    type: ROUTES_TYPES.PRIVATE,
  },
  {
    path: PATHS.editProfile,
    name: "edit-profile",
    component: pages.EditProfile,
    ifIsLoginGoBack: true,
    layout: {
      type: "home",
    },
    type: ROUTES_TYPES.PRIVATE,
  },
  {
    path: PATHS.login,
    name: "login",
    component: pages.Login,
    ifIsLoginGoBack: true,
    layout: {
      type: "login",
    },
    type: ROUTES_TYPES.PUBLIC,
  },
  {
    path: PATHS.register,
    name: "register ",
    component: pages.Register,
    ifIsLoginGoBack: true,
    layout: {
      type: "login",
    },
    type: ROUTES_TYPES.PUBLIC,
  },

  {
    path: PATHS.orders,
    name: "orders",
    component: pages.Orders,
    ifIsLoginGoBack: true,
    layout: {
      type: "home",
    },
    type: ROUTES_TYPES.PRIVATE,
  },
  {
    path: PATHS.productTypes,
    name: "product-types",
    component: pages.ProductTypes,
    ifIsLoginGoBack: true,
    layout: {
      type: "home",
    },
    type: ROUTES_TYPES.PRIVATE,
  },
  {
    path: PATHS.createProductCat,
    name: "create-product-types",
    component: pages.CreateProductCat,
    ifIsLoginGoBack: true,
    layout: {
      type: "home",
    },
    type: ROUTES_TYPES.PRIVATE,
  },
];
