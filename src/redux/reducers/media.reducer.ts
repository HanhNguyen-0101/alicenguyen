import {
  ADD_MEDIA_FAILURE,
  ADD_MEDIA_REQUEST,
  ADD_MEDIA_SUCCESS,
  DELETE_MEDIA_FAILURE,
  DELETE_MEDIA_REQUEST,
  DELETE_MEDIA_SUCCESS,
  EDIT_MEDIA_FAILURE,
  EDIT_MEDIA_REQUEST,
  EDIT_MEDIA_SUCCESS,
  FIND_MEDIA_BY_KEYWORD_FAILURE,
  FIND_MEDIA_BY_KEYWORD_REQUEST,
  FIND_MEDIA_BY_KEYWORD_SUCCESS,
  GET_MEDIA_BY_ID_FAILURE,
  GET_MEDIA_BY_ID_REQUEST,
  GET_MEDIA_BY_ID_SUCCESS,
  GET_MEDIA_FAILURE,
  GET_MEDIA_REQUEST,
  GET_MEDIA_SUCCESS,
} from "../actionTypes/media.actionTypes";
import { MediaActions, MediaState } from "../types/media.type";

const initialState: MediaState = {
  mediaArr: [],
  error: null,
  media: null,
  deleteMsg: null,
};

const reducers = (state = initialState, action: MediaActions) => {
  switch (action.type) {
    case GET_MEDIA_REQUEST:
      return {
        ...state,
      };
    case GET_MEDIA_SUCCESS:
      return {
        ...state,
        mediaArr: action.payload.data,
        error: null,
      };
    case GET_MEDIA_FAILURE:
      return {
        ...state,
        mediaArr: [],
        error: action.payload.error,
      };
    case ADD_MEDIA_REQUEST:
      return {
        ...state,
      };
    case ADD_MEDIA_SUCCESS:
      return {
        ...state,
        media: action.payload.data,
        error: null,
      };
    case ADD_MEDIA_FAILURE:
      return {
        ...state,
        media: null,
        error: action.payload.error,
      };
    case EDIT_MEDIA_REQUEST:
      return {
        ...state,
      };
    case EDIT_MEDIA_SUCCESS:
      return {
        ...state,
        media: action.payload.data,
        error: null,
      };
    case EDIT_MEDIA_FAILURE:
      return {
        ...state,
        media: null,
        error: action.payload.error,
      };
    case DELETE_MEDIA_REQUEST:
      return {
        ...state,
      };
    case DELETE_MEDIA_SUCCESS:
      return {
        ...state,
        deleteMsg: action.payload.data,
        error: null,
      };
    case DELETE_MEDIA_FAILURE:
      return {
        ...state,
        deleteMsg: null,
        error: action.payload.error,
      };
    case GET_MEDIA_BY_ID_REQUEST:
      return {
        ...state,
      };
    case GET_MEDIA_BY_ID_SUCCESS:
      return {
        ...state,
        media: action.payload.data,
        error: null,
      };
    case GET_MEDIA_BY_ID_FAILURE:
      return {
        ...state,
        media: null,
        error: action.payload.error,
      };

    case FIND_MEDIA_BY_KEYWORD_REQUEST:
      return {
        ...state,
      };
    case FIND_MEDIA_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        mediaArr: action.payload.data,
        error: null,
      };
    case FIND_MEDIA_BY_KEYWORD_FAILURE:
      return {
        ...state,
        mediaArr: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
