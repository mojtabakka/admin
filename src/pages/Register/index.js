import React from "react";
import { RegisterTemplate } from "./Register.template";

const Register = (props) => {
  const handleRegister = () => {
  };
  return <RegisterTemplate onRegister={handleRegister} {...props} />;
};

export { Register };
