import {
  START_SPINNER,
  GET_CATEGORY,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CATEGORY_ERROR,
} from "./categoryTypes";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getCategory = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/category");

    dispatch({
      type: GET_CATEGORY,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err.response.data.errors,
    });
  }
};

export const createCategory = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({ type: START_SPINNER });
    const res = await axios.post("/api/v1/category", formData, config);

    dispatch({
      type: CREATE_CATEGORY,
      payload: res.data.data,
    });

    toast.success(`❤️ ${res.data.message}`)
    formData.setDescription('')
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err.response.data.errors,
    });
    toast.error(`❤️ ${err.response.data.msg}`)
  }
};

export const updateCategory = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({ type: START_SPINNER });
    const res = await axios.put(
      `/api/v1/category/${formData.id}`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_CATEGORY,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err.response.data.errors,
    });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/category/${id}`);

    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err.response.data.errors,
    });
  }
};
