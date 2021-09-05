import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCES,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCES,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCES,
} from "../types";

const initialState = {
  loading: false,
  users: null,
  errors: null,
  token: null,
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return { ...state, loading: true };
    case REGISTER_SUCCES:
      return { ...state, loading: false, users: payload.user };
    case REGISTER_FAIL:
      return { ...state, loading: false, errors: payload };
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCES:
      return { ...state, loading: false, token: payload };
    case LOGIN_FAIL:
      return { ...state, loading: false, errors: payload };
    case GET_USER:
      return { ...state, loading: true };
    case GET_USER_SUCCES:
      return { ...state, loading: false, isAuth: payload, users: payload };
    case GET_USER_FAIL:
      return { ...state, loading: false, errors: payload };
    default:
      return state;
  }
};
export default reducer;
