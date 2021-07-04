import React from "react";
import styled from "styled-components";
import {
  FormButton,
  FormInputText,
  ErrorMessage,
} from "../../components/common/";
import useForm from "../../lib/useForm";
import { loginFormValidate } from "../../lib/validate";

// TODO: email(테스트용) -> id
const LoginForm = ({ onLogin }) => {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { email: "test2@test.com", password: "qlalfqjsgh11" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("form");
      onLogin(values);
    },
    validate: loginFormValidate,
  });

  return (
    <LoginSection>
      <h3>로그인</h3>
      <WriteForm>
        <LoginView>
          <form noValidate method="post">
            <FormInputText
              type="text"
              placeholder="이메일을 입력해주세요"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={errors && errors.email && "errorInput"}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

            <FormInputText
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              value={values.password}
              onChange={handleChange}
              className={errors && errors.password && "errorInput"}
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

            <LoginSearch>
              <span>아이디 찾기</span>
              <Bar></Bar>
              <span>비밀번호 찾기</span>
            </LoginSearch>
            <FormButton
              onClick={handleSubmit}
              color="purple"
              disabled={submitting}
            >
              로그인
            </FormButton>
            {/* <div>{token}</div> */}
          </form>
          <RegisterButton color="white">회원가입</RegisterButton>
        </LoginView>
      </WriteForm>
    </LoginSection>
  );
};

export default React.memo(LoginForm);

const LoginSection = styled.section`
  width: 340px;
  margin: 0 auto;
  padding-top: 90px;
  letter-spacing: -0.6px;
  font-family: note sans;
  color: #333;
  text-align: center;

  h3 {
    font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  }
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

const RegisterButton = styled(FormButton)`
  margin-top: 10px;
`;
