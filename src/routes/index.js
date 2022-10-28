import { React } from "react";
import { RoutesConfig, ROUTES_TYPES } from "config/routes.config";
import { Public, Protected, Private } from "./components";
// import History from "../../utils/history.utils";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const RoutesSite = () => {
  const element = (type, item) => {
    let component;
    switch (type) {
      case ROUTES_TYPES.PRIVATE:
        component = <Private {...item} />;
        break;
      case ROUTES_TYPES.PUBLIC:
        component = <Public {...item} />;
        break;
      case ROUTES_TYPES.PROTECTED:
        component = <Protected {...item} />;
        break;
      default:
        component = <Private {...item} />;
    }
    return component;
  };
  return (
    <Router>
      <Routes>
        {RoutesConfig.map((item) => {
          return (
            <Route
              path={item.path}
              key={item.path}
              element={element(item.type, item)}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default RoutesSite;
