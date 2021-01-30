import {
  PASSWORD_SUCCESS,
  CHANGE_PASSWORD,
  PASSWORD_ERROR,
} from './forgotpassword.types';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CHECK EMAIL AND SEND LINK
export const checkEmail = (email) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(`/api/forgotpassword`, email, config);

    dispatch({
      type: PASSWORD_SUCCESS,
      payload: res.data,
    });
    
    toast.success(`❤️ ${res.data.msg}`);
  
  } catch (err) {
    dispatch({ type: PASSWORD_ERROR, payload: err.response.msg });

    toast.error(`❤️ ${err.response.data.msg }`);
  }
};

// CHANGE PASSWORD
export const changePassword = ({ password, token, history }) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/forgotpassword/${token}`, { password });
    dispatch({ type: CHANGE_PASSWORD, payload: res.data.msg });
    toast.success(`❤️ ${res.data.msg}`);
    history.push("/login");
  } catch (err) {
    const errors = err.response.data.msg;
    dispatch({ type: PASSWORD_ERROR, payload: errors });
    toast.error(`❤️ ${errors }`);
  }
};
