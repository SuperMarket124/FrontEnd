import React, { useState } from "react";
import Header from "../components/Header";
import ServiceCenterNav from "../components/nav/ServiceCenterNav";
import ServiceCenterBoard from "../components/board/ServiceCenterBoard";

function ServiceCenter() {
  return (
    <>
      <ServiceCenterNav />
      <ServiceCenterBoard />
    </>
  );
}

export default ServiceCenter;
