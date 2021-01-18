import {
  START_SPINNER,
  USER_LOADED,
  GET_USERS,
  LOGIN_SUCCESS,
  UPDATE_PROFILE,
  LOGIN_FAIL,
  AUTH_ERROR,
  PROFILE_ERROR,
  LOGOUT,
} from "./userTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
  user: null,
  users: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_SPINNER:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: payload
      }
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case UPDATE_PROFILE: 
      return {
        ...state,
        loading: false
      }
    case PROFILE_ERROR: 
    return {
      ...state,
      loading: false,
      error: payload
    }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
