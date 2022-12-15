import {
  ADD_SUBCATEGORY_FAILURE,
  ADD_SUBCATEGORY_REQUEST,
  ADD_SUBCATEGORY_SUCCESS,
  DELETE_SUBCATEGORY_FAILURE,
  DELETE_SUBCATEGORY_REQUEST,
  DELETE_SUBCATEGORY_SUCCESS,
  EDIT_SUBCATEGORY_FAILURE,
  EDIT_SUBCATEGORY_REQUEST,
  EDIT_SUBCATEGORY_SUCCESS,
  FIND_SUBCATEGORY_BY_KEYWORD_FAILURE,
  FIND_SUBCATEGORY_BY_KEYWORD_REQUEST,
  FIND_SUBCATEGORY_BY_KEYWORD_SUCCESS,
  GET_SUBCATEGORY_BY_ID_FAILURE,
  GET_SUBCATEGORY_BY_ID_REQUEST,
  GET_SUBCATEGORY_BY_ID_SUCCESS,
  GET_SUBCATEGORY_FAILURE,
  GET_SUBCATEGORY_REQUEST,
  GET_SUBCATEGORY_SUCCESS,
} from "../actionTypes/subCategory.actionTypes";
import { SubCategoryActions, SubCategoryState } from "../types/subCategory.type";

const initialState: SubCategoryState = {
  subCategoryArr: [],
  error: null,
  subCategory: null,
  deleteMsg: null,
};

const reducers = (state = initialState, action: SubCategoryActions) => {
  switch (action.type) {
    case GET_SUBCATEGORY_REQUEST:
      return {
        ...state,
      };
    case GET_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        subCategoryArr: action.payload.data,
        error: null,
      };
    case GET_SUBCATEGORY_FAILURE:
      return {
        ...state,
        subCategoryArr: [],
        error: action.payload.error,
      };
    case ADD_SUBCATEGORY_REQUEST:
      return {
        ...state,
      };
    case ADD_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        subCategory: action.payload.data,
        error: null,
      };
    case ADD_SUBCATEGORY_FAILURE:
      return {
        ...state,
        subCategory: null,
        error: action.payload.error,
      };
    case EDIT_SUBCATEGORY_REQUEST:
      return {
        ...state,
      };
    case EDIT_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        subCategory: action.payload.data,
        error: null,
      };
    case EDIT_SUBCATEGORY_FAILURE:
      return {
        ...state,
        subCategory: null,
        error: action.payload.error,
      };
    case DELETE_SUBCATEGORY_REQUEST:
      return {
        ...state,
      };
    case DELETE_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        deleteMsg: action.payload.data,
        error: null,
      };
    case DELETE_SUBCATEGORY_FAILURE:
      return {
        ...state,
        deleteMsg: null,
        error: action.payload.error,
      };
    case GET_SUBCATEGORY_BY_ID_REQUEST:
      return {
        ...state,
      };
    case GET_SUBCATEGORY_BY_ID_SUCCESS:
      return {
        ...state,
        subCategory: action.payload.data,
        error: null,
      };
    case GET_SUBCATEGORY_BY_ID_FAILURE:
      return {
        ...state,
        subCategory: null,
        error: action.payload.error,
      };

    case FIND_SUBCATEGORY_BY_KEYWORD_REQUEST:
      return {
        ...state,
      };
    case FIND_SUBCATEGORY_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        subCategoryArr: action.payload.data,
        error: null,
      };
    case FIND_SUBCATEGORY_BY_KEYWORD_FAILURE:
      return {
        ...state,
        subCategoryArr: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
