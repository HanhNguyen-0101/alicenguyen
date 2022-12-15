import {
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
  EDIT_CONTACT_REQUEST,
  EDIT_CONTACT_SUCCESS,
  FIND_CONTACT_BY_KEYWORD_FAILURE,
  FIND_CONTACT_BY_KEYWORD_REQUEST,
  FIND_CONTACT_BY_KEYWORD_SUCCESS,
  GET_CONTACT_BY_ID_FAILURE,
  GET_CONTACT_BY_ID_REQUEST,
  GET_CONTACT_BY_ID_SUCCESS,
  GET_CONTACT_FAILURE,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
} from "../actionTypes/contact.actionTypes";
import { ContactActions, ContactState } from "../types/contact.type";

const initialState: ContactState = {
  contactArr: [],
  error: null,
  contact: null,
  deleteMsg: null,
};

const reducers = (state = initialState, action: ContactActions) => {
  switch (action.type) {
    case GET_CONTACT_REQUEST:
      return {
        ...state,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        contactArr: action.payload.data,
        error: null,
      };
    case GET_CONTACT_FAILURE:
      return {
        ...state,
        contactArr: [],
        error: action.payload.error,
      };
    case ADD_CONTACT_REQUEST:
      return {
        ...state,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload.data,
        error: null,
      };
    case ADD_CONTACT_FAILURE:
      return {
        ...state,
        contact: null,
        error: action.payload.error,
      };
    case EDIT_CONTACT_REQUEST:
      return {
        ...state,
      };
    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload.data,
        error: null,
      };
    case EDIT_CONTACT_FAILURE:
      return {
        ...state,
        contact: null,
        error: action.payload.error,
      };
    case DELETE_CONTACT_REQUEST:
      return {
        ...state,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteMsg: action.payload.data,
        error: null,
      };
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        deleteMsg: null,
        error: action.payload.error,
      };
    case GET_CONTACT_BY_ID_REQUEST:
      return {
        ...state,
      };
    case GET_CONTACT_BY_ID_SUCCESS:
      return {
        ...state,
        contact: action.payload.data,
        error: null,
      };
    case GET_CONTACT_BY_ID_FAILURE:
      return {
        ...state,
        contact: null,
        error: action.payload.error,
      };

    case FIND_CONTACT_BY_KEYWORD_REQUEST:
      return {
        ...state,
      };
    case FIND_CONTACT_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        contactArr: action.payload.data,
        error: null,
      };
    case FIND_CONTACT_BY_KEYWORD_FAILURE:
      return {
        ...state,
        contactArr: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
