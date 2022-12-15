import {
  ADD_ORGANIZATION_FAILURE,
  ADD_ORGANIZATION_REQUEST,
  ADD_ORGANIZATION_SUCCESS,
  DELETE_ORGANIZATION_FAILURE,
  DELETE_ORGANIZATION_REQUEST,
  DELETE_ORGANIZATION_SUCCESS,
  EDIT_ORGANIZATION_FAILURE,
  EDIT_ORGANIZATION_REQUEST,
  EDIT_ORGANIZATION_SUCCESS,
  FIND_ORGANIZATION_BY_KEYWORD_FAILURE,
  FIND_ORGANIZATION_BY_KEYWORD_REQUEST,
  FIND_ORGANIZATION_BY_KEYWORD_SUCCESS,
  GET_ORGANIZATION_BY_ID_FAILURE,
  GET_ORGANIZATION_BY_ID_REQUEST,
  GET_ORGANIZATION_BY_ID_SUCCESS,
  GET_ORGANIZATION_FAILURE,
  GET_ORGANIZATION_REQUEST,
  GET_ORGANIZATION_SUCCESS,
} from "../actionTypes/organization.actionTypes";
import { OrganizationActions, OrganizationState } from "../types/organization.type";

const initialState: OrganizationState = {
  organizationArr: [],
  error: null,
  organization: null,
  deleteMsg: null,
};

const reducers = (state = initialState, action: OrganizationActions) => {
  switch (action.type) {
    case GET_ORGANIZATION_REQUEST:
      return {
        ...state,
      };
    case GET_ORGANIZATION_SUCCESS:
      return {
        ...state,
        organizationArr: action.payload.data,
        error: null,
      };
    case GET_ORGANIZATION_FAILURE:
      return {
        ...state,
        organizationArr: [],
        error: action.payload.error,
      };
    case ADD_ORGANIZATION_REQUEST:
      return {
        ...state,
      };
    case ADD_ORGANIZATION_SUCCESS:
      return {
        ...state,
        organization: action.payload.data,
        error: null,
      };
    case ADD_ORGANIZATION_FAILURE:
      return {
        ...state,
        organization: null,
        error: action.payload.error,
      };
    case EDIT_ORGANIZATION_REQUEST:
      return {
        ...state,
      };
    case EDIT_ORGANIZATION_SUCCESS:
      return {
        ...state,
        organization: action.payload.data,
        error: null,
      };
    case EDIT_ORGANIZATION_FAILURE:
      return {
        ...state,
        organization: null,
        error: action.payload.error,
      };
    case DELETE_ORGANIZATION_REQUEST:
      return {
        ...state,
      };
    case DELETE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        deleteMsg: action.payload.data,
        error: null,
      };
    case DELETE_ORGANIZATION_FAILURE:
      return {
        ...state,
        deleteMsg: null,
        error: action.payload.error,
      };
    case GET_ORGANIZATION_BY_ID_REQUEST:
      return {
        ...state,
      };
    case GET_ORGANIZATION_BY_ID_SUCCESS:
      return {
        ...state,
        organization: action.payload.data,
        error: null,
      };
    case GET_ORGANIZATION_BY_ID_FAILURE:
      return {
        ...state,
        organization: null,
        error: action.payload.error,
      };

    case FIND_ORGANIZATION_BY_KEYWORD_REQUEST:
      return {
        ...state,
      };
    case FIND_ORGANIZATION_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        organizationArr: action.payload.data,
        error: null,
      };
    case FIND_ORGANIZATION_BY_KEYWORD_FAILURE:
      return {
        ...state,
        organizationArr: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
