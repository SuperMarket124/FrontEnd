import * as usersAPI from "../api/users"; // api/users 안의 함수 모두 불러오기
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

/* 액션 타입 */

// 포스트 여러개 조회하기
const GET_USERS = "GET_USERS"; // 요청 시작
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"; // 요청 성공
const GET_USERS_ERROR = "GET_USERS_ERROR"; // 요청 실패

// 로그인하기
const LOGIN = "LOGIN"; // 요청 시작
const LOGIN_SUCCESS = "LOGIN_SUCCESS"; // 요청 성공
const LOGIN_ERROR = "LOGIN_ERROR"; // 요청 실패

// 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
// export const getUsers = createPromiseThunk(GET_USERS, usersAPI.getUsers);
export const login = createPromiseThunk(LOGIN, usersAPI.login);

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  users: reducerUtils.initial(),
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
    case GET_USERS_SUCCESS:
    case GET_USERS_ERROR:
      return handleAsyncActions(GET_USERS, "users", true)(state, action);
    case LOGIN:
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return handleAsyncActions(LOGIN, "login", true)(state, action);

    default:
      return state;
  }
}
