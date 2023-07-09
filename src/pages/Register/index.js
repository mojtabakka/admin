import React, { useState } from "react";
import { connect } from "react-redux";
import { RegisterTemplate } from "./Register.template";
import { register } from "redux/actions/Auth.action";
import { CONFIRM_PASSWORD } from "./Register.config";
import { useNavigate } from "react-router-dom";
import { PATHS } from "config/routes.config";
import { ErrorBoundary } from "components";

const RegisterPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register } = props;
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    delete data[CONFIRM_PASSWORD];
    try {
      const result = await register(data);
      result && navigate(PATHS.login);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ErrorBoundary>
      <RegisterTemplate
        onRegister={handleRegister}
        {...props}
        isLoading={isLoading}
      />
      ;
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(register(data)),
});
const Register = connect(null, mapDispatchToProps)(RegisterPage);
export { Register };
