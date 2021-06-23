import React from "react";
import styled from "styled-components";

function MainArticle(props) {
  const { children } = props;

  return <Article>{children}</Article>;
}

export default MainArticle;

const Article = styled.div`
  width: 1050px;
  margin: 0 auto;
`;
