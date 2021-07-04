export const loginFormValidate = ({ id, password }) => {
  const errors = {};

  if (!id) {
    errors.id = "아이디가 입력되지 않았습니다.";
  }

  if (!password) {
    errors.password = "비밀번호가 입력되지 않았습니다";
  }

  return errors;
};
