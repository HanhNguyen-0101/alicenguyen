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
import {
  AddProjectFailure,
  AddProjectFailurePayload,
  AddProjectPayload,
  AddProjectRequest,
  AddProjectSuccess,
  AddProjectSuccessPayload,
  DeleteProjectFailure,
  DeleteProjectFailurePayload,
  DeleteProjectPayload,
  DeleteProjectRequest,
  DeleteProjectSuccess,
  DeleteProjectSuccessPayload,
  EditProjectFailure,
  EditProjectFailurePayload,
  EditProjectPayload,
  EditProjectRequest,
  EditProjectSuccess,
  EditProjectSuccessPayload,
  FindProjectByKeywordFailure,
  FindProjectByKeywordFailurePayload,
  FindProjectByKeywordPayload,
  FindProjectByKeywordRequest,
  FindProjectByKeywordSuccess,
  FindProjectByKeywordSuccessPayload,
  GetProjectByIdFailure,
  GetProjectByIdFailurePayload,
  GetProjectByIdPayload,
  GetProjectByIdRequest,
  GetProjectByIdSuccess,
  GetProjectByIdSuccessPayload,
  GetProjectFailure,
  GetProjectFailurePayload,
  GetProjectPayload,
  GetProjectRequest,
  GetProjectSuccess,
  GetProjectSuccessPayload,
} from "../types/project.type";

// *****************GET ALL******************
export const getProjectRequest = (
  payload: GetProjectPayload
): GetProjectRequest => ({
  type: GET_PROJECT_REQUEST,
  payload,
});
export const getProjectSuccess = (
  payload: GetProjectSuccessPayload
): GetProjectSuccess => ({
  type: GET_PROJECT_SUCCESS,
  payload,
});
export const getProjectFailure = (
  payload: GetProjectFailurePayload
): GetProjectFailure => ({
  type: GET_PROJECT_FAILURE,
  payload,
});

// *****************ADD******************
export const addProjectRequest = (
  payload: AddProjectPayload
): AddProjectRequest => ({
  type: ADD_PROJECT_REQUEST,
  payload,
});
export const addProjectSuccess = (
  payload: AddProjectSuccessPayload
): AddProjectSuccess => ({
  type: ADD_PROJECT_SUCCESS,
  payload,
});
export const addProjectFailure = (
  payload: AddProjectFailurePayload
): AddProjectFailure => ({
  type: ADD_PROJECT_FAILURE,
  payload,
});

// *****************EDIT******************
export const editProjectRequest = (
  payload: EditProjectPayload
): EditProjectRequest => ({
  type: EDIT_PROJECT_REQUEST,
  payload,
});
export const editProjectSuccess = (
  payload: EditProjectSuccessPayload
): EditProjectSuccess => ({
  type: EDIT_PROJECT_SUCCESS,
  payload,
});
export const editProjectFailure = (
  payload: EditProjectFailurePayload
): EditProjectFailure => ({
  type: EDIT_PROJECT_FAILURE,
  payload,
});

// *****************DELETE******************
export const deleteProjectRequest = (
  payload: DeleteProjectPayload
): DeleteProjectRequest => ({
  type: DELETE_PROJECT_REQUEST,
  payload,
});
export const deleteProjectSuccess = (
  payload: DeleteProjectSuccessPayload
): DeleteProjectSuccess => ({
  type: DELETE_PROJECT_SUCCESS,
  payload,
});
export const deleteProjectFailure = (
  payload: DeleteProjectFailurePayload
): DeleteProjectFailure => ({
  type: DELETE_PROJECT_FAILURE,
  payload,
});

// *****************GET BY ID******************
export const getProjectByIdRequest = (
  payload: GetProjectByIdPayload
): GetProjectByIdRequest => ({
  type: GET_PROJECT_BY_ID_REQUEST,
  payload,
});
export const getProjectByIdSuccess = (
  payload: GetProjectByIdSuccessPayload
): GetProjectByIdSuccess => ({
  type: GET_PROJECT_BY_ID_SUCCESS,
  payload,
});
export const getProjectByIdFailure = (
  payload: GetProjectByIdFailurePayload
): GetProjectByIdFailure => ({
  type: GET_PROJECT_BY_ID_FAILURE,
  payload,
});

// *****************FIND BY KEYWORD******************
export const findProjectByKeywordRequest = (
  payload: FindProjectByKeywordPayload
): FindProjectByKeywordRequest => ({
  type: FIND_PROJECT_BY_KEYWORD_REQUEST,
  payload,
});
export const findProjectByKeywordSuccess = (
  payload: FindProjectByKeywordSuccessPayload
): FindProjectByKeywordSuccess => ({
  type: FIND_PROJECT_BY_KEYWORD_SUCCESS,
  payload,
});
export const findProjectByKeywordFailure = (
  payload: FindProjectByKeywordFailurePayload
): FindProjectByKeywordFailure => ({
  type: FIND_PROJECT_BY_KEYWORD_FAILURE,
  payload,
});
