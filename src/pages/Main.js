import React, { useState } from "react";
import Header from "../components/Header";
// import RegisterForm from "../components/form/RegisterForm"
// import LoginForm from "../components/form/LoginForm"
// import LoginFindIdForm from "../components/form/LoginFindIdForm"
// import LoginFindPwdForm from "../components/form/LoginFindPwdForm"
import Modal from "../components/Modal";
import Postcode from "@actbase/react-daum-postcode";

function Main() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal open={modalOpen} close={closeModal}>
      <Postcode
        style={{ width: 470 }}
        jsOptions={{ animated: true, hideMapBtn: true }}
        onSelected={(data) => {
          alert(JSON.stringify(data));
        }}
      />
    </Modal>
  );
}

export default Main;
