// import { PATHS } from "./routes.config";
import * as AiIcons from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SiBrandfolder } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { FiType } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { VscSymbolProperty } from "react-icons/vsc";
// import * as MdIcons from "react-icons/md";
// import * as RiIcons from "react-icons/ri";
// import * as IoIcons from 'react-icons/io'
export const PATHS = {
  home: "/",
  login: "/login",
  register: "/register",
  createProduct: "/create-product",
  orders: "/orders",
  createProductCat: "/create-product-cat",
  productTypes: "/product-types",
  brands: "/brands",
  filter: "/filter",
  property: "/property",
};
const items = [
  {
    name: "محصولات",
    label: "محصولات",
    icon: <AiIcons.AiFillHome />,
    path: PATHS.createProduct,
  },

  {
    name: "سفارش ها",
    label: "سفارش ها",
    icon: <HiOutlineClipboardList />,
    path: PATHS.orders,
  },

  {
    name: "ایجاد دسته بندی",
    label: "ایجاد دسته بندی",
    icon: <BiCategory />,
    path: PATHS.createProductCat,
  },

  {
    name: "برندها",
    label: "برندها",
    icon: <SiBrandfolder />,
    path: PATHS.brands,
  },

  {
    name: "نوع محصول",
    label: "نوع محصول",
    icon: <FiType />,
    path: PATHS.productTypes,
  },

  {
    name: "فیلترها",
    label: "فیلترها",
    icon: <FaFilter />,
    path: PATHS.filter,
  },

  {
    name: "ویژگی ها",
    label: "ویژگی ها",
    icon: <VscSymbolProperty />,
    path: PATHS.property,
  },

  // {
  //   name: "setting",
  //   label: "Setting",
  //   icon: <AiIcons.AiOutlineSetting />,
  // },
  // {
  //   name: "billing",
  //   label: "Billing",
  //   icon: <MdIcons.MdOutlineAccountBalanceWallet />,
  // },
  // {
  //   name: "home",
  //   label: "Home",
  //   icon: <RiIcons.RiBillLine />,
  // },
  // {
  //   name: "home",
  //   label: "Home",
  //   icon: <RiIcons.RiBillLine />,
  //   items: [
  //     {
  //       name: "statements",
  //       label: "Statements",
  //       icon: <RiIcons.RiBillLine />,
  //     },
  //     {
  //       name: "reports",
  //       label: "Reports",
  //       icon: <RiIcons.RiBillLine />,
  //     },
  //   ],
  // },
];

const colors = [
  { backgroundColor: "#BEDBFE", color: "black " },
  { backgroundColor: "#08A45C", color: "white" },
  { backgroundColor: "red", color: "white" },
  { backgroundColor: "purple", color: "blue" },
  { backgroundColor: "gray", color: "black" },
  { backgroundColor: "gray", color: "black" },
];

export { colors, items };
