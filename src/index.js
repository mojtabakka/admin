import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Helmet from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { getAppTitle } from "common/utils/function.util";

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
  const siteName = getAppTitle();
  const title = getAppTitle();
  const root = ReactDOM.createRoot(document.getElementById("root"));
  return root.render(
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>{siteName}</title>
          <link rel="icon" href="#" type="image/png" />
          <meta property="og:url" content={window.location.hostname} />
          <meta
            property="twitter:description"
            content={"پروژه فروشگاه دوربین"}
          />
          <meta property="og:description" content={"پروژه فروشگاه دوربین"} />
          <meta name="description" content={"پروژه فروشگاه دوربین"} />
          <meta property="twitter:title" content={"hello"} />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:title" content={title} />
          {/* <meta property="test" content={token} /> */}
        </Helmet>
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
