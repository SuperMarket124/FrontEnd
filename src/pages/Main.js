import React, { useState } from "react";
import Header from "../components/Header";
import RegisterForm from "../components/form/RegisterForm";
// import LoginForm from "../components/form/LoginForm"
// import LoginFindIdForm from "../components/form/LoginFindIdForm"
// import LoginFindPwdForm from "../components/form/LoginFindPwdForm"
import Modal from "../components/Modal";
import DaumPostCode from "react-daum-postcode";

function Main() {
  return (
    <>
      <Header />
      <RegisterForm />
    </>
  );
}

export default Main;
