import React, { useState } from "react";
import styled from "styled-components";

const LoginForm = () => {

  return (
    <LoginSection>
      <h3>로그인</h3>
      <WriteForm>
        <LoginView>
          <form>
            <input type="text" placeholder="아이디를 입력해주세요" />
            <input type="password" placeholder="비밀번호를 입력해주세요" />
            <LoginSearch>
              <a>아이디 찾기</a>
              <Bar></Bar>
              <a>비밀번호 찾기</a>
            </LoginSearch>
            <LoginButton>
              <span>로그인</span>
            </LoginButton>
          </form>
          <RegisterButton>
            <span>회원가입</span>
          </RegisterButton>
        </LoginView>
      </WriteForm>
    </LoginSection>
  );
};

export default LoginForm;

const LoginSection = styled.section`
  width: 340px;
  margin: 0 auto;
  padding-top: 90px;
  letter-spacing: -0.6px;
  font-family: note sans;
  color: #333;
  text-align: center;
`;

const WriteForm = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  padding-top: 36px;
`;

const LoginView = styled.div`
  text-align: center;

  input {
    width: 100%;
    height: 54px;
    padding: 0 19px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #fff;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    &:focus {
      border: 1px solid #333;
    }
  }

  input[type="password"] {
    margin-top: 10px;
  }
`;

const LoginSearch = styled.div`
  overflow: hidden;
  width: 340px;
  padding-top: 13px;
  margin-top: 9px;
  padding-bottom: 28px;
  display: flex;
  justify-content: flex-end;

  a {
    float: left;
    font-size: 13px;
  }
`;

const Bar = styled.div`
  width: 1px;
  height: 10px;
  margin: 3px 6px 0;
  background-color: #333;

`;

const Button = styled.button`
  display: block;
  overflow: hidden;
  width: 100%;
  height: 54px;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

const LoginButton = styled(Button)`
  border: 1px solid #5f0081;
  background-color: #5f0080;
  span {
    color: #fff;
  }
`;

const RegisterButton = styled(Button)`
  border: 1px solid #5f0081;
  background-color: #fff;
  margin-top: 10px;
  span {
    color: #5f0080;
  }
`;
