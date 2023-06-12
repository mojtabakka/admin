import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: [
      "shabnam",
      // "Roboto",
      // '"Helvetica Neue"',
      // "Arial",
      // "sans-serif",
    ].join(","),
  },
});

const renderDom = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  return root.render(
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CacheProvider>
  );
};
const loadStyles = async () => {
  await (async () => {
    return await import("asset/styles/style.scss");
  })();
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
// const renderDOM = () => {
//   ReactDOM.render(React.createElement(App), document.getElementById("app"));
// };

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

try {
  loadStyles();
  renderDom();
} catch {}
reportWebVitals();
