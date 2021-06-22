import React from "react";
import styled from "styled-components";

import { Route, Link } from "react-router-dom";
import Register from "../pages/Register";

function MainSection(props) {
  const { className, children } = props;

  return (
    <Section>
      <Content>{children}</Content>
    </Section>
  );
}

export default MainSection;

const Section = styled.div`
  border-bottom: 1px solid #f7f7f7;
`;

const Content = styled.div`
  padding-bottom: 0;
  min-width: 1050px;
  padding-bottom: 120px;
  position: relative;
`;
