import { AUTH, TOKEN } from "../../utils/config/configSetting";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  ADD_AUTH_FAILURE,
  ADD_AUTH_REQUEST,
  ADD_AUTH_SUCCESS,
  DELETE_AUTH_FAILURE,
  DELETE_AUTH_REQUEST,
  DELETE_AUTH_SUCCESS,
  EDIT_AUTH_FAILURE,
  EDIT_AUTH_REQUEST,
  EDIT_AUTH_SUCCESS,
  FIND_AUTH_BY_KEYWORD_FAILURE,
  FIND_AUTH_BY_KEYWORD_REQUEST,
  FIND_AUTH_BY_KEYWORD_SUCCESS,
  GET_AUTH_BY_ID_FAILURE,
  GET_AUTH_BY_ID_REQUEST,
  GET_AUTH_BY_ID_SUCCESS,
  GET_AUTH_FAILURE,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_FAILURE,
  UPDATE_AVATAR_SUCCESS,
  LOGOUT,
} from "./../actionTypes/auth.actionTypes";

import { AuthActions, AuthState } from "./../types/auth.type";
let authLogin = "";
if (localStorage.getItem(AUTH)) {
  authLogin = JSON.stringify(localStorage.getItem(AUTH));
}
const initialState: AuthState = {
  authLogin,
  pending: false,
  token: "",
  authArr: [],
  error: null,
  auth: null,
  deleteMsg: null,
};

const reducers = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        pending: false,
        token: "",
        error: action.payload.error,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      };
    case LOGOUT:
      localStorage.removeItem(AUTH);
      localStorage.removeItem(TOKEN);
      return {
        ...state,
        pending: false,
        authLogin: "",
        token: "",
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem(AUTH, JSON.stringify(action.payload.data.user));
      localStorage.setItem(TOKEN, action.payload.data.token);
      return {
        ...state,
        pending: false,
        authLogin: JSON.stringify(action.payload.data.user),
        token: action.payload.data.token,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        token: "",
        error: action.payload.error,
      };
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        pending: false,
        token: "",
        error: action.payload.error,
      };
    case UPDATE_PROFILE_SUCCESS:
      localStorage.setItem(AUTH, JSON.stringify(action.payload.data));
      return {
        ...state,
        pending: false,
        authLogin: JSON.stringify(action.payload.data),
        error: null,
      };
    case UPDATE_AVATAR_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case UPDATE_AVATAR_FAILURE:
      return {
        ...state,
        pending: false,
        token: "",
        error: action.payload.error,
      };
    case UPDATE_AVATAR_SUCCESS:
      localStorage.setItem(AUTH, JSON.stringify(action.payload.data));
      return {
        ...state,
        pending: false,
        authLogin: JSON.stringify(action.payload.data),
        error: null,
      };
    case GET_AUTH_REQUEST:
      return {
        ...state,
      };
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        authArr: action.payload.data,
        error: null,
      };
    case GET_AUTH_FAILURE:
      return {
        ...state,
        authArr: [],
        error: action.payload.error,
      };
    case ADD_AUTH_REQUEST:
      return {
        ...state,
      };
    case ADD_AUTH_SUCCESS:
      return {
        ...state,
        auth: action.payload.data,
        error: null,
      };
    case ADD_AUTH_FAILURE:
      return {
        ...state,
        auth: null,
        error: action.payload.error,
      };
    case EDIT_AUTH_REQUEST:
      return {
        ...state,
      };
    case EDIT_AUTH_SUCCESS:
      return {
        ...state,
        auth: action.payload.data,
        error: null,
      };
    case EDIT_AUTH_FAILURE:
      return {
        ...state,
        auth: null,
        error: action.payload.error,
      };
    case DELETE_AUTH_REQUEST:
      return {
        ...state,
      };
    case DELETE_AUTH_SUCCESS:
      return {
        ...state,
        deleteMsg: action.payload.data,
        error: null,
      };
    case DELETE_AUTH_FAILURE:
      return {
        ...state,
        deleteMsg: null,
        error: action.payload.error,
      };
    case GET_AUTH_BY_ID_REQUEST:
      return {
        ...state,
      };
    case GET_AUTH_BY_ID_SUCCESS:
      return {
        ...state,
        auth: action.payload.data,
        error: null,
      };
    case GET_AUTH_BY_ID_FAILURE:
      return {
        ...state,
        auth: null,
        error: action.payload.error,
      };

    case FIND_AUTH_BY_KEYWORD_REQUEST:
      return {
        ...state,
      };
    case FIND_AUTH_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        authArr: action.payload.data,
        error: null,
      };
    case FIND_AUTH_BY_KEYWORD_FAILURE:
      return {
        ...state,
        authArr: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
