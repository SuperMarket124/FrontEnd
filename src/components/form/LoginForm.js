import React from "react";
import styled from "styled-components";
import FormButton from "../../components/FormButton";
import FormInputText from "../../components/FormInputText";

// TODO a -> LINK
const LoginForm = () => {
  return (
    <LoginSection>
      <h3>로그인</h3>
      <WriteForm>
        <LoginView>
          <form>
            <FormInputText type="text" placeholder="아이디를 입력해주세요" />
            <FormInputText
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <LoginSearch>
              <a>아이디 찾기</a>
              <Bar></Bar>
              <a>비밀번호 찾기</a>
            </LoginSearch>
            <FormButton color="purple">로그인</FormButton>
          </form>
          <FormButton color="white">회원가입</FormButton>
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
