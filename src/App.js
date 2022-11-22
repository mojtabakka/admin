import React from "react";
import { Provider } from "react-redux";
// import MainLayout from './components/layout/mainLayout';
import RoutesSite from "./routes";
import { store } from "redux/store";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "react-bootstrap";
const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <ToastContainer />
        <RoutesSite />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
