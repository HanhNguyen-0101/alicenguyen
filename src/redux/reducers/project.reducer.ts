import {
  ADD_PROJECT_FAILURE,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE,
  EDIT_PROJECT_REQUEST,
  EDIT_PROJECT_SUCCESS,
  FIND_PROJECT_BY_KEYWORD_FAILURE,
  FIND_PROJECT_BY_KEYWORD_REQUEST,
  FIND_PROJECT_BY_KEYWORD_SUCCESS,
  GET_PROJECT_BY_ID_FAILURE,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_FAILURE,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
} from "../actionTypes/project.actionTypes";
import { ProjectActions, ProjectState } from "../types/project.type";

const initialState: ProjectState = {
  projectArr: [],
  error: null,
  project: null,
  deleteMsg: null,
};

const reducers = (state = initialState, action: ProjectActions) => {
  switch (action.type) {
    case GET_PROJECT_REQUEST:
      return {
        ...state,
      };
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        projectArr: action.payload.data,
        error: null,
      };
    case GET_PROJECT_FAILURE:
      return {
        ...state,
        projectArr: [],
        error: action.payload.error,
      };
    case ADD_PROJECT_REQUEST:
      return {
        ...state,
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.payload.data,
        error: null,
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        project: null,
        error: action.payload.error,
      };
    case EDIT_PROJECT_REQUEST:
      return {
        ...state,
      };
    case EDIT_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.payload.data,
        error: null,
      };
    case EDIT_PROJECT_FAILURE:
      return {
        ...state,
        project: null,
        error: action.payload.error,
      };
    case DELETE_PROJECT_REQUEST:
      return {
        ...state,
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        deleteMsg: action.payload.data,
        error: null,
      };
    case DELETE_PROJECT_FAILURE:
      return {
        ...state,
        deleteMsg: null,
        error: action.payload.error,
      };
    case GET_PROJECT_BY_ID_REQUEST:
      return {
        ...state,
      };
    case GET_PROJECT_BY_ID_SUCCESS:
      return {
        ...state,
        project: action.payload.data,
        error: null,
      };
    case GET_PROJECT_BY_ID_FAILURE:
      return {
        ...state,
        project: null,
        error: action.payload.error,
      };

    case FIND_PROJECT_BY_KEYWORD_REQUEST:
      return {
        ...state,
      };
    case FIND_PROJECT_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        projectArr: action.payload.data,
        error: null,
      };
    case FIND_PROJECT_BY_KEYWORD_FAILURE:
      return {
        ...state,
        projectArr: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
