import {
  ADD_SKILL_FAILURE,
  ADD_SKILL_REQUEST,
  ADD_SKILL_SUCCESS,
  DELETE_SKILL_FAILURE,
  DELETE_SKILL_REQUEST,
  DELETE_SKILL_SUCCESS,
  EDIT_SKILL_FAILURE,
  EDIT_SKILL_REQUEST,
  EDIT_SKILL_SUCCESS,
  FIND_SKILL_BY_KEYWORD_FAILURE,
  FIND_SKILL_BY_KEYWORD_REQUEST,
  FIND_SKILL_BY_KEYWORD_SUCCESS,
  GET_SKILL_BY_ID_FAILURE,
  GET_SKILL_BY_ID_REQUEST,
  GET_SKILL_BY_ID_SUCCESS,
  GET_SKILL_FAILURE,
  GET_SKILL_REQUEST,
  GET_SKILL_SUCCESS,
} from "../actionTypes/skill.actionTypes";
import { SkillActions, SkillState } from "../types/skill.type";

const initialState: SkillState = {
  skillArr: [],
  error: null,
  skill: null,
  deleteMsg: null,
};

const reducers = (state = initialState, action: SkillActions) => {
  switch (action.type) {
    case GET_SKILL_REQUEST:
      return {
        ...state,
      };
    case GET_SKILL_SUCCESS:
      return {
        ...state,
        skillArr: action.payload.data,
        error: null,
      };
    case GET_SKILL_FAILURE:
      return {
        ...state,
        skillArr: [],
        error: action.payload.error,
      };
    case ADD_SKILL_REQUEST:
      return {
        ...state,
      };
    case ADD_SKILL_SUCCESS:
      return {
        ...state,
        skill: action.payload.data,
        error: null,
      };
    case ADD_SKILL_FAILURE:
      return {
        ...state,
        skill: null,
        error: action.payload.error,
      };
    case EDIT_SKILL_REQUEST:
      return {
        ...state,
      };
    case EDIT_SKILL_SUCCESS:
      return {
        ...state,
        skill: action.payload.data,
        error: null,
      };
    case EDIT_SKILL_FAILURE:
      return {
        ...state,
        skill: null,
        error: action.payload.error,
      };
    case DELETE_SKILL_REQUEST:
      return {
        ...state,
      };
    case DELETE_SKILL_SUCCESS:
      return {
        ...state,
        deleteMsg: action.payload.data,
        error: null,
      };
    case DELETE_SKILL_FAILURE:
      return {
        ...state,
        deleteMsg: null,
        error: action.payload.error,
      };
    case GET_SKILL_BY_ID_REQUEST:
      return {
        ...state,
      };
    case GET_SKILL_BY_ID_SUCCESS:
      return {
        ...state,
        skill: action.payload.data,
        error: null,
      };
    case GET_SKILL_BY_ID_FAILURE:
      return {
        ...state,
        skill: null,
        error: action.payload.error,
      };

    case FIND_SKILL_BY_KEYWORD_REQUEST:
      return {
        ...state,
      };
    case FIND_SKILL_BY_KEYWORD_SUCCESS:
      return {
        ...state,
        skillArr: action.payload.data,
        error: null,
      };
    case FIND_SKILL_BY_KEYWORD_FAILURE:
      return {
        ...state,
        skillArr: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
