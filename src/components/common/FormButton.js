import React from "react";
import styled, { css } from "styled-components";
import { color } from "../../theme";

const colorStyles = css`
  ${(props) =>
    props.color === "purple" &&
    css`
        border: 1px solid ${color.DARK_PURPLE};
        background-color: ${color.PURPLE}};
        span {
            color: ${color.WHITE};
        }
    `}

  ${(props) =>
    props.color === "white" &&
    css`
      border: 1px solid ${color.DARK_PURPLE};
      background-color: ${color.WHITE};
      span {
        color: ${color.PURPLE};
      }
    `}
`;

const StyledButton = styled.button`
  display: block;
  overflow: hidden;
  width: 100%;
  height: 54px;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  ${colorStyles}
`;

const FormButton = ({ children, color, ...rest }) => {
  return (
    <StyledButton {...rest} color={color}>
      <span>{children}</span>
    </StyledButton>
  );
};

FormButton.defaultProps = {
  color: "purple",
};

export default FormButton;
