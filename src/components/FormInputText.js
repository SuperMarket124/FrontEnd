import React from "react";
import styled from "styled-components";
import { color } from "../theme";

const StyledInputText = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 19px;
  border: 1px solid ${color.GRAY};
  border-radius: 3px;
  background-color: ${color.WHITE};
  font-size: 14px;
  line-height: 20px;
  outline: none;

  &::placeholder {
    color: ${color.T_PLACE_HOLDER};
  }

  &:focus {
    border: 1px solid ${color.BLACK};
  }

  & + & {
    margin-top: 10px;
  }
`;

const FormInputText = ({ type, placeholder, ...rest }) => {
  return (
    <StyledInputText
      {...rest}
      type={type}
      placeholder={placeholder}
    ></StyledInputText>
  );
};

export default FormInputText;
