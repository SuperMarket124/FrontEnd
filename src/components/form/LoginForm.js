import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormButton from "../../components/common/FormButton";
import FormInputText from "../../components/common/FormInputText";
// import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

  // const login = () => {
  //   const data = {
  //     email: id,
  //     password,
  //   };
  //   axios
  //     .post("/login", data)
  //     .then((response) => {
  //       const { accessToken } = response.data;

  //       // API 요청하는 콜마다헤더에 accessToken 담아 보내도록 설정
  //       axios.defaults.headers.common[
  //         "Authorization"
  //       ] = `Bearer ${accessToken}`;

  //       console.log(`access token: ${accessToken}`);
  //       // accessToken을 localStorage, cookie 등에 저장하지 않는다!
  //     })
  //     .catch((error) => {
  //       // ... 에러 처리
  //       console.log(error);
  //     });
  // };
  // const login = async () => {
  //   try {
  //     // 초기화
  //     setError(null);
  //     setToken(null);
  //     setLoading(true);
  //     const response = await axios.post(
  //       "http://ydhdelivery.shop/authenticate",
  //       {
  //         name: id,
  //         password: password,
  //       }
  //     );
  //     // if (response.status === "200") {
  //     //   setToken(response.data.token);
  //     //   sessionStorage.setItem("token", response.data.token);
  //     // } else {
  //     //   alert("password erorr");
  //     // }
  //     setToken(response.data.token);
  //     sessionStorage.setItem("token", response.data.token);
  //   } catch (e) {
  //     setError(e);
  //   }
  //   setLoading(false);
  // };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <LoginSection>
      <h3>로그인</h3>
      <WriteForm>
        <LoginView>
          <form>
            <FormInputText
              type="text"
              placeholder="아이디를 입력해주세요"
              name="id"
              value={id}
              onChange={onInputChange}
            />
            <FormInputText
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={onInputChange}
            />
            <LoginSearch>
              <a>아이디 찾기</a>
              <Bar></Bar>
              <a>비밀번호 찾기</a>
            </LoginSearch>
            <FormButton color="purple" onClick={onLogin}>
              로그인
            </FormButton>
            <div>{token}</div>
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
