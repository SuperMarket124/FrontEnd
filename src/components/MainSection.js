import React from "react";
import styled from "styled-components";

function MainSection(props) {
  const { children } = props;

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
  /* padding-bottom: 0;
  min-width: 1050px;
  padding-bottom: 120px;
  position: relative; */
  min-width: 1050px;
  padding-bottom: 120px;
`;
