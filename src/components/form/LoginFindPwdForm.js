import React from "react";
import styled from "styled-components";

const LoginFindPwdForm = () => {
  return (
    <LoginFindIdSection>
      <h3>비밀번호 찾기</h3>
      <WriteForm>
        <LoginFindIdView>
          <form>
            <p>이름</p>
            <input type="text" placeholder="고객님의 이름을 입력해주세요." />
            <p>아이디</p>
            <input type="text" placeholder="고객님의 이름을 입력해주세요." />
            <p>이메일</p>
            <input type="text" placeholder="가입 시 등록하신 이메일 주소를 입력해주세요" />
            <FindButton>
              <span>찾기</span>
            </FindButton>
          </form>
        </LoginFindIdView>
      </WriteForm>
    </LoginFindIdSection>
  );
};

export default LoginFindPwdForm;

const LoginFindIdSection = styled.section`
  width: 340px;
  margin: 0 auto;
  padding-top: 90px;
  letter-spacing: -0.6px;
  font-family: note sans;
  color: #333;
  text-align: center;

  form p {
    display: block;
    padding: 11px 0 7px;
    font-size: 12px;
    line-height: 18px;
    text-align: left;
    font-weight: bold;
  }
`;

const WriteForm = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  padding-top: 36px;
`;

const LoginFindIdView = styled.div`
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

const FindButton = styled(Button)`
  margin-top: 30px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  span {
    color: #fff;
  }
`;
