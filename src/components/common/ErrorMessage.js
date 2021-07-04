import React from "react";
import styled from "styled-components";
import { color } from "../../theme";

const StyledErrorMessage = styled.span`
  color: tomato;
  font-size: 12px;
`;

const ErrorMessage = ({ ...rest }) => {
  return <StyledErrorMessage {...rest}></StyledErrorMessage>;
};

export default ErrorMessage;
