import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainSection from "../components/MainSection";

const Layout = ({ children, match, location, history }) => {
  return (
    <>
      <Container>
        <Header />
        <MainSection>{children}</MainSection>
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div``;
