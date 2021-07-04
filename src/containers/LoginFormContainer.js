import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/form/LoginForm";
import { login } from "../modules/users";

function LoginFormContainer() {
  const dispatch = useDispatch();

  const onLogin = (props) => {
    debugger;
    console.log("container");
    dispatch(login(props));
  };

  return <LoginForm onLogin={onLogin} />;
}

export default LoginFormContainer;
