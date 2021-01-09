import {
  START_SPINNER,
  USER_LOADED,
  LOGIN_SUCCESS,
  UPDATE_PROFILE,
  LOGIN_FAIL,
  AUTH_ERROR,
  PROFILE_ERROR,
  LOGOUT,
} from "./userTypes";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// LOAD USER
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/v1/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// USER LOGIN
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    dispatch({ type: START_SPINNER });
    const res = await axios.post("/api/v1/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => toast.error(`❤️ ${error.msg}`));
    }

    dispatch({
      type: LOGIN_FAIL,
      payload: errors,
    });
  }
};

// REGISTER USER
export const register = ({
  firstName,
  lastName,
  displayName,
  email,
  phone,
  password,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    firstName,
    lastName,
    displayName,
    email,
    phone,
    password,
  });

  try {
    dispatch({ type: START_SPINNER });
    const res = await axios.post("/api/v1/user", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.msg;

    if (errors) {
      toast.error(errors);
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: errors,
    });
  }
};

// UPDATE USER PROFILE
export const updateProfile = (formData) => async (dispatch) => {

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({ type: START_SPINNER });
    const res = await axios.put("/api/v1/auth/profile", formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      // payload: res.data.message,
    });

    toast.success(`❤️ ${res.data.message}`)
  } catch (err) {
    const errors = err.response.data.msg;

    if (errors) {
      toast.error(errors);
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: errors,
    });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
