import React, { memo, useCallback, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PATHS } from "config/routes.config";
import { LoginTemplate } from "./Login.template";
import { login } from "redux/actions/Auth.action";
import { ErrorBoundary } from "components";

const LoginPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { login } = props;
    try {
      setIsLoading(true);
      const form = new FormData(e.target);
      const data = Object.fromEntries(form);
      console.log(data);
      await login(data);
      navigate(PATHS.home);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ErrorBoundary>
      <LoginTemplate onSubmit={handleSubmit} isLoading={isLoading} />
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

const Login = connect(null, mapDispatchToProps)(LoginPage);

export { Login };
