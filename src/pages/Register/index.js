import React from "react";
import { connect } from "react-redux";
import { RegisterTemplate } from "./Register.template";
import { register } from "redux/actions/Auth.action";
import { CONFIRM_PASSWORD } from "./Register.config";
import { useNavigate } from "react-router-dom";
import { PATHS } from "config/routes.config";

const RegisterPage = (props) => {
  const { register } = props;
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    delete data[CONFIRM_PASSWORD];
    try {
      await register(data);
      navigate(PATHS.login);
    } catch (error) {
      console.log("error", error);
    }
  };
  return <RegisterTemplate onRegister={handleRegister} {...props} />;
};

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(register(data)),
});
const Register = connect(null, mapDispatchToProps)(RegisterPage);
export { Register };
