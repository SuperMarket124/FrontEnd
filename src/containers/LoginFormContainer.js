import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "../components/form/LoginForm";
import { login } from "../modules/users";

function LoginFormContainer() {
  // const { data, loading, error } = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  const onLogin = (props) => {
    dispatch(login());
  };

  // if (loading) return <div>로딩중...</div>;
  // if (error) return <div>에러 발생!</div>;
  // if (!data) return null;

  return <LoginForm login={onLogin} />;
}

export default LoginFormContainer;
