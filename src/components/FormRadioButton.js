import React from "react";
import styled from "styled-components";
import { color } from "../theme";

const StyledRadioButton = styled.label`
  display: inline-block;
  padding: 10px 52px 10px 0;
  vertical-align: top;

  input[type="radio"] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    box-sizing: border-box;
    padding: 0;
    max-width: 100%;

    & + .ico {
      display: inline-block;
      position: relative;
      width: 24px;
      height: 24px;
      margin-right: 12px;
      border: 1px solid ${color.LIGHT_GRAY};
      background-color: ${color.WHITE};
      border-radius: 100%;
      vertical-align: -7px;
      padding: 0;
      margin-right: 12px;
    }

    &:checked + .ico {
      border: 1px solid ${color.DARK_PURPLE};
      background-color: ${color.PURPLE};
    }

    &:checked + .ico::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 10px;
      height: 10px;
      margin: -5px 0 0 -5px;
      border-radius: 100%;
      background-color: #fff;
    }
  }
`;

const FormRadioButton = ({ text, name }) => {
  return (
    <StyledRadioButton>
      <input type="radio" name={name} />
      <span className="ico"></span>
      {text}
    </StyledRadioButton>
  );
};

export default FormRadioButton;
