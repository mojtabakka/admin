import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "react-toastify/dist/ReactToastify.css";

const renderDom = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  return root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
