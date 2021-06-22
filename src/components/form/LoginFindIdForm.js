import React from "react";
import styled from "styled-components";
import FormButton from "../../components/common/FormButton";
import FormInputText from "../../components/common/FormInputText";

const LoginFindIdForm = () => {
  return (
    <LoginFindIdSection>
      <h3>아이디 찾기</h3>
      <WriteForm>
        <LoginFindIdView>
          <form>
            <p>이름</p>
            <FormInputText
              type="text"
              placeholder="고객님의 이름을 입력해주세요."
            />
            <p>이메일</p>
            <FormInputText
              type="text"
              placeholder="가입 시 등록하신 이메일 주소를 입력해주세요"
            />
            <ConfirmButton>
              <span>확인</span>
            </ConfirmButton>
          </form>
        </LoginFindIdView>
      </WriteForm>
    </LoginFindIdSection>
  );
};

export default LoginFindIdForm;

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
`;

const ConfirmButton = styled(FormButton)`
  margin-top: 30px;
`;
