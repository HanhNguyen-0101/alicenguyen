import {
  ADD_CATEGORY_FAILURE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILURE,
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY_SUCCESS,
  FIND_CATEGORY_BY_KEYWORD_FAILURE,
  FIND_CATEGORY_BY_KEYWORD_REQUEST,
  FIND_CATEGORY_BY_KEYWORD_SUCCESS,
  GET_CATEGORY_BY_ID_FAILURE,
  GET_CATEGORY_BY_ID_REQUEST,
  GET_CATEGORY_BY_ID_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "../actionTypes/category.actionTypes";
import { CategoryActions, CategoryState } from "../types/category.type";

const initialState: CategoryState = {
  categoryArr: [],
  error: null,
  category: null,
  deleteMsg: null,
};

const reducers = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        ...state,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryArr: action.payload.data,
        error: null,
      };
    case GET_CATEGORY_FAILURE:
      return {
        ...state,
        categoryArr: [],
        error: action.payload.error,
      };
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload.data,
        error: null,
      };
    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        category: null,
        error: action.payload.error,
      };
    case EDIT_CATEGORY_REQUEST:
      return {
        ...state,
      };
    case EDIT_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload.data,
        error: null,
      };
    case EDIT_CATEGORY_FAILURE:
      return {
        ...state,
        category: null,
        error: action.payload.error,
      };
    case DELETE_CATEGORY_REQUEST:
      return {
        ...state,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        deleteMsg: action.payload.data,
        error: null,
      };
    case DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        deleteMsg: null,
        error: action.payload.error,
      };
    case GET_CATEGORY_BY_ID_REQUEST:
      return {
        ...state,
      };
    case GET_CATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        category: action.payload.data,
        error: null,
      };
    case GET_CATEGORY_BY_ID_FAILURE:
      return {
        ...state,
        category: null,
        error: action.payload.error,
      };

    case FIND_CATEGORY_BY_KEYWORD_REQUEST:
      return {
        ...state,
      };
    case FIND_CATEGORY_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        categoryArr: action.payload.data,
        error: null,
      };
    case FIND_CATEGORY_BY_KEYWORD_FAILURE:
      return {
        ...state,
        categoryArr: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
