import {
  START_SPINNER,
  GET_CATEGORY,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  CATEGORY_ERROR,
} from "./categoryTypes";

const INITIALSTATE = {
  categories: [],
  loading: false,
  error: {},
};

const CategoryReducer = (state = INITIALSTATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_SPINNER:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY:
      return {
        ...state,
        categories: payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
        loading: false,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category._id === payload._id ? payload : category
        ),
        loading: false,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category._id !== payload
        ),
        loading: false,
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
