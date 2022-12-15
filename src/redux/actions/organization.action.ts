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
import {
  AddOrganizationFailure,
  AddOrganizationFailurePayload,
  AddOrganizationPayload,
  AddOrganizationRequest,
  AddOrganizationSuccess,
  AddOrganizationSuccessPayload,
  DeleteOrganizationFailure,
  DeleteOrganizationFailurePayload,
  DeleteOrganizationPayload,
  DeleteOrganizationRequest,
  DeleteOrganizationSuccess,
  DeleteOrganizationSuccessPayload,
  EditOrganizationFailure,
  EditOrganizationFailurePayload,
  EditOrganizationPayload,
  EditOrganizationRequest,
  EditOrganizationSuccess,
  EditOrganizationSuccessPayload,
  FindOrganizationByKeywordFailure,
  FindOrganizationByKeywordFailurePayload,
  FindOrganizationByKeywordPayload,
  FindOrganizationByKeywordRequest,
  FindOrganizationByKeywordSuccess,
  FindOrganizationByKeywordSuccessPayload,
  GetOrganizationByIdFailure,
  GetOrganizationByIdFailurePayload,
  GetOrganizationByIdPayload,
  GetOrganizationByIdRequest,
  GetOrganizationByIdSuccess,
  GetOrganizationByIdSuccessPayload,
  GetOrganizationFailure,
  GetOrganizationFailurePayload,
  GetOrganizationPayload,
  GetOrganizationRequest,
  GetOrganizationSuccess,
  GetOrganizationSuccessPayload,
} from "../types/organization.type";

// *****************GET ALL******************
export const getOrganizationRequest = (
  payload: GetOrganizationPayload
): GetOrganizationRequest => ({
  type: GET_ORGANIZATION_REQUEST,
  payload,
});
export const getOrganizationSuccess = (
  payload: GetOrganizationSuccessPayload
): GetOrganizationSuccess => ({
  type: GET_ORGANIZATION_SUCCESS,
  payload,
});
export const getOrganizationFailure = (
  payload: GetOrganizationFailurePayload
): GetOrganizationFailure => ({
  type: GET_ORGANIZATION_FAILURE,
  payload,
});

// *****************ADD******************
export const addOrganizationRequest = (
  payload: AddOrganizationPayload
): AddOrganizationRequest => ({
  type: ADD_ORGANIZATION_REQUEST,
  payload,
});
export const addOrganizationSuccess = (
  payload: AddOrganizationSuccessPayload
): AddOrganizationSuccess => ({
  type: ADD_ORGANIZATION_SUCCESS,
  payload,
});
export const addOrganizationFailure = (
  payload: AddOrganizationFailurePayload
): AddOrganizationFailure => ({
  type: ADD_ORGANIZATION_FAILURE,
  payload,
});

// *****************EDIT******************
export const editOrganizationRequest = (
  payload: EditOrganizationPayload
): EditOrganizationRequest => ({
  type: EDIT_ORGANIZATION_REQUEST,
  payload,
});
export const editOrganizationSuccess = (
  payload: EditOrganizationSuccessPayload
): EditOrganizationSuccess => ({
  type: EDIT_ORGANIZATION_SUCCESS,
  payload,
});
export const editOrganizationFailure = (
  payload: EditOrganizationFailurePayload
): EditOrganizationFailure => ({
  type: EDIT_ORGANIZATION_FAILURE,
  payload,
});

// *****************DELETE******************
export const deleteOrganizationRequest = (
  payload: DeleteOrganizationPayload
): DeleteOrganizationRequest => ({
  type: DELETE_ORGANIZATION_REQUEST,
  payload,
});
export const deleteOrganizationSuccess = (
  payload: DeleteOrganizationSuccessPayload
): DeleteOrganizationSuccess => ({
  type: DELETE_ORGANIZATION_SUCCESS,
  payload,
});
export const deleteOrganizationFailure = (
  payload: DeleteOrganizationFailurePayload
): DeleteOrganizationFailure => ({
  type: DELETE_ORGANIZATION_FAILURE,
  payload,
});

// *****************GET BY ID******************
export const getOrganizationByIdRequest = (
  payload: GetOrganizationByIdPayload
): GetOrganizationByIdRequest => ({
  type: GET_ORGANIZATION_BY_ID_REQUEST,
  payload,
});
export const getOrganizationByIdSuccess = (
  payload: GetOrganizationByIdSuccessPayload
): GetOrganizationByIdSuccess => ({
  type: GET_ORGANIZATION_BY_ID_SUCCESS,
  payload,
});
export const getOrganizationByIdFailure = (
  payload: GetOrganizationByIdFailurePayload
): GetOrganizationByIdFailure => ({
  type: GET_ORGANIZATION_BY_ID_FAILURE,
  payload,
});

// *****************FIND BY KEYWORD******************
export const findOrganizationByKeywordRequest = (
  payload: FindOrganizationByKeywordPayload
): FindOrganizationByKeywordRequest => ({
  type: FIND_ORGANIZATION_BY_KEYWORD_REQUEST,
  payload,
});
export const findOrganizationByKeywordSuccess = (
  payload: FindOrganizationByKeywordSuccessPayload
): FindOrganizationByKeywordSuccess => ({
  type: FIND_ORGANIZATION_BY_KEYWORD_SUCCESS,
  payload,
});
export const findOrganizationByKeywordFailure = (
  payload: FindOrganizationByKeywordFailurePayload
): FindOrganizationByKeywordFailure => ({
  type: FIND_ORGANIZATION_BY_KEYWORD_FAILURE,
  payload,
});
