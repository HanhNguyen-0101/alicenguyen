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
import {
  AddSkillFailure,
  AddSkillFailurePayload,
  AddSkillPayload,
  AddSkillRequest,
  AddSkillSuccess,
  AddSkillSuccessPayload,
  DeleteSkillFailure,
  DeleteSkillFailurePayload,
  DeleteSkillPayload,
  DeleteSkillRequest,
  DeleteSkillSuccess,
  DeleteSkillSuccessPayload,
  EditSkillFailure,
  EditSkillFailurePayload,
  EditSkillPayload,
  EditSkillRequest,
  EditSkillSuccess,
  EditSkillSuccessPayload,
  FindSkillByKeywordFailure,
  FindSkillByKeywordFailurePayload,
  FindSkillByKeywordPayload,
  FindSkillByKeywordRequest,
  FindSkillByKeywordSuccess,
  FindSkillByKeywordSuccessPayload,
  GetSkillByIdFailure,
  GetSkillByIdFailurePayload,
  GetSkillByIdPayload,
  GetSkillByIdRequest,
  GetSkillByIdSuccess,
  GetSkillByIdSuccessPayload,
  GetSkillFailure,
  GetSkillFailurePayload,
  GetSkillPayload,
  GetSkillRequest,
  GetSkillSuccess,
  GetSkillSuccessPayload,
} from "../types/skill.type";

// *****************GET ALL******************
export const getSkillRequest = (
  payload: GetSkillPayload
): GetSkillRequest => ({
  type: GET_SKILL_REQUEST,
  payload,
});
export const getSkillSuccess = (
  payload: GetSkillSuccessPayload
): GetSkillSuccess => ({
  type: GET_SKILL_SUCCESS,
  payload,
});
export const getSkillFailure = (
  payload: GetSkillFailurePayload
): GetSkillFailure => ({
  type: GET_SKILL_FAILURE,
  payload,
});

// *****************ADD******************
export const addSkillRequest = (
  payload: AddSkillPayload
): AddSkillRequest => ({
  type: ADD_SKILL_REQUEST,
  payload,
});
export const addSkillSuccess = (
  payload: AddSkillSuccessPayload
): AddSkillSuccess => ({
  type: ADD_SKILL_SUCCESS,
  payload,
});
export const addSkillFailure = (
  payload: AddSkillFailurePayload
): AddSkillFailure => ({
  type: ADD_SKILL_FAILURE,
  payload,
});

// *****************EDIT******************
export const editSkillRequest = (
  payload: EditSkillPayload
): EditSkillRequest => ({
  type: EDIT_SKILL_REQUEST,
  payload,
});
export const editSkillSuccess = (
  payload: EditSkillSuccessPayload
): EditSkillSuccess => ({
  type: EDIT_SKILL_SUCCESS,
  payload,
});
export const editSkillFailure = (
  payload: EditSkillFailurePayload
): EditSkillFailure => ({
  type: EDIT_SKILL_FAILURE,
  payload,
});

// *****************DELETE******************
export const deleteSkillRequest = (
  payload: DeleteSkillPayload
): DeleteSkillRequest => ({
  type: DELETE_SKILL_REQUEST,
  payload,
});
export const deleteSkillSuccess = (
  payload: DeleteSkillSuccessPayload
): DeleteSkillSuccess => ({
  type: DELETE_SKILL_SUCCESS,
  payload,
});
export const deleteSkillFailure = (
  payload: DeleteSkillFailurePayload
): DeleteSkillFailure => ({
  type: DELETE_SKILL_FAILURE,
  payload,
});

// *****************GET BY ID******************
export const getSkillByIdRequest = (
  payload: GetSkillByIdPayload
): GetSkillByIdRequest => ({
  type: GET_SKILL_BY_ID_REQUEST,
  payload,
});
export const getSkillByIdSuccess = (
  payload: GetSkillByIdSuccessPayload
): GetSkillByIdSuccess => ({
  type: GET_SKILL_BY_ID_SUCCESS,
  payload,
});
export const getSkillByIdFailure = (
  payload: GetSkillByIdFailurePayload
): GetSkillByIdFailure => ({
  type: GET_SKILL_BY_ID_FAILURE,
  payload,
});

// *****************FIND BY KEYWORD******************
export const findSkillByKeywordRequest = (
  payload: FindSkillByKeywordPayload
): FindSkillByKeywordRequest => ({
  type: FIND_SKILL_BY_KEYWORD_REQUEST,
  payload,
});
export const findSkillByKeywordSuccess = (
  payload: FindSkillByKeywordSuccessPayload
): FindSkillByKeywordSuccess => ({
  type: FIND_SKILL_BY_KEYWORD_SUCCESS,
  payload,
});
export const findSkillByKeywordFailure = (
  payload: FindSkillByKeywordFailurePayload
): FindSkillByKeywordFailure => ({
  type: FIND_SKILL_BY_KEYWORD_FAILURE,
  payload,
});
