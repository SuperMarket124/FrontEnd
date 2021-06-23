import React, { useState } from "react";
import styled from "styled-components";
import { Header, Footer, MainSection } from "../components";

const Layout = ({ children, match, location, history }) => {
  return (
    <>
      <Container>
        <Header />
        <MainSection>{children}</MainSection>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div``;
