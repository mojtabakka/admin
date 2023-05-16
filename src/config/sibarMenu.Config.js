// import { PATHS } from "./routes.config";
import * as AiIcons from "react-icons/ai";
// import * as MdIcons from "react-icons/md";
// import * as RiIcons from "react-icons/ri";
// import * as IoIcons from 'react-icons/io'
export const PATHS = {
  home: "/",
  login: "/login",
  register: "/register",
  createProduct: "/create-product",
};
const items = [
  {
    name: "محصولات",
    label: "محصولات",
    icon: <AiIcons.AiFillHome />,
    path: PATHS.createProduct,
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
  { backgroundColor: "#92C5FD", color: "blue" },
  { backgroundColor: "#08A45C", color: "white" },
  { backgroundColor: "red", color: "white" },
  { backgroundColor: "purple", color: "blue" },
  { backgroundColor: "gray", color: "black" },
  { backgroundColor: "gray", color: "black" },
];

export { colors, items };
