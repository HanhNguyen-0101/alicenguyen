import {
  ADD_BLOG_FAILURE,
  ADD_BLOG_REQUEST,
  ADD_BLOG_SUCCESS,
  DELETE_BLOG_FAILURE,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  EDIT_BLOG_FAILURE,
  EDIT_BLOG_REQUEST,
  EDIT_BLOG_SUCCESS,
  FIND_BLOG_BY_KEYWORD_FAILURE,
  FIND_BLOG_BY_KEYWORD_REQUEST,
  FIND_BLOG_BY_KEYWORD_SUCCESS,
  FIND_BLOG_BY_SUBCATEGORY_ID_FAILURE,
  FIND_BLOG_BY_SUBCATEGORY_ID_REQUEST,
  FIND_BLOG_BY_SUBCATEGORY_ID_SUCCESS,
  GET_BLOG_BY_ID_FAILURE,
  GET_BLOG_BY_ID_REQUEST,
  GET_BLOG_BY_ID_SUCCESS,
  GET_BLOG_FAILURE,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
} from "../actionTypes/blog.actionTypes";
import { BlogActions, BlogState } from "../types/blog.type";

const initialState: BlogState = {
  blogArr: [],
  error: null,
  blog: null,
  deleteMsg: null,
};

const reducers = (state = initialState, action: BlogActions) => {
  switch (action.type) {
    case GET_BLOG_REQUEST:
      return {
        ...state,
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        blogArr: action.payload.data,
        error: null,
      };
    case GET_BLOG_FAILURE:
      return {
        ...state,
        blogArr: [],
        error: action.payload.error,
      };
    case ADD_BLOG_REQUEST:
      return {
        ...state,
      };
    case ADD_BLOG_SUCCESS:
      return {
        ...state,
        blog: action.payload.data,
        error: null,
      };
    case ADD_BLOG_FAILURE:
      return {
        ...state,
        blog: null,
        error: action.payload.error,
      };
    case EDIT_BLOG_REQUEST:
      return {
        ...state,
      };
    case EDIT_BLOG_SUCCESS:
      return {
        ...state,
        blog: action.payload.data,
        error: null,
      };
    case EDIT_BLOG_FAILURE:
      return {
        ...state,
        blog: null,
        error: action.payload.error,
      };
    case DELETE_BLOG_REQUEST:
      return {
        ...state,
      };
    case DELETE_BLOG_SUCCESS:
      return {
        ...state,
        deleteMsg: action.payload.data,
        error: null,
      };
    case DELETE_BLOG_FAILURE:
      return {
        ...state,
        deleteMsg: null,
        error: action.payload.error,
      };
    case GET_BLOG_BY_ID_REQUEST:
      return {
        ...state,
      };
    case GET_BLOG_BY_ID_SUCCESS:
      return {
        ...state,
        blog: action.payload.data,
        error: null,
      };
    case GET_BLOG_BY_ID_FAILURE:
      return {
        ...state,
        blog: null,
        error: action.payload.error,
      };
    case FIND_BLOG_BY_KEYWORD_REQUEST:
      return {
        ...state,
      };
    case FIND_BLOG_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        blogArr: action.payload.data,
        error: null,
      };
    case FIND_BLOG_BY_KEYWORD_FAILURE:
      return {
        ...state,
        blogArr: [],
        error: action.payload.error,
      };

    case FIND_BLOG_BY_SUBCATEGORY_ID_REQUEST:
      return {
        ...state,
      };
    case FIND_BLOG_BY_SUBCATEGORY_ID_SUCCESS:
      return {
        ...state,
        blogArr: action.payload.data,
        error: null,
      };
    case FIND_BLOG_BY_SUBCATEGORY_ID_FAILURE:
      return {
        ...state,
        blogArr: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
