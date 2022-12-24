import React from "react";
import { Provider } from "react-redux";
// import MainLayout from './components/layout/mainLayout';
import RoutesSite from "./routes";
import { store } from "redux/store";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <RoutesSite />
    </Provider>
  );
};

export default App;
