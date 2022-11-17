import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PATHS } from "config/routes.config";
import { LoginTemplate } from "./Login.template";
import { login } from "redux/actions/Auth.action";
const LoginPage = (props) => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    const { login } = props;
    try {
      const data = {
        email: "mojtaba.karimi.mo@gmail.com",
        password: "123456",
      };
       login(data);
      // navigate(PATHS.home);
    } catch (error) {
      
      console.log("error", error);
    }
  };
  return <LoginTemplate onLogin={handleLogin} />;
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

const Login = connect(null, mapDispatchToProps)(LoginPage);

export { Login };
