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
import {
  AddContactFailure,
  AddContactFailurePayload,
  AddContactPayload,
  AddContactRequest,
  AddContactSuccess,
  AddContactSuccessPayload,
  DeleteContactFailure,
  DeleteContactFailurePayload,
  DeleteContactPayload,
  DeleteContactRequest,
  DeleteContactSuccess,
  DeleteContactSuccessPayload,
  EditContactFailure,
  EditContactFailurePayload,
  EditContactPayload,
  EditContactRequest,
  EditContactSuccess,
  EditContactSuccessPayload,
  FindContactByKeywordFailure,
  FindContactByKeywordFailurePayload,
  FindContactByKeywordPayload,
  FindContactByKeywordRequest,
  FindContactByKeywordSuccess,
  FindContactByKeywordSuccessPayload,
  GetContactByIdFailure,
  GetContactByIdFailurePayload,
  GetContactByIdPayload,
  GetContactByIdRequest,
  GetContactByIdSuccess,
  GetContactByIdSuccessPayload,
  GetContactFailure,
  GetContactFailurePayload,
  GetContactPayload,
  GetContactRequest,
  GetContactSuccess,
  GetContactSuccessPayload,
} from "../types/contact.type";

// *****************GET ALL******************
export const getContactRequest = (
  payload: GetContactPayload
): GetContactRequest => ({
  type: GET_CONTACT_REQUEST,
  payload,
});
export const getContactSuccess = (
  payload: GetContactSuccessPayload
): GetContactSuccess => ({
  type: GET_CONTACT_SUCCESS,
  payload,
});
export const getContactFailure = (
  payload: GetContactFailurePayload
): GetContactFailure => ({
  type: GET_CONTACT_FAILURE,
  payload,
});

// *****************ADD******************
export const addContactRequest = (
  payload: AddContactPayload
): AddContactRequest => ({
  type: ADD_CONTACT_REQUEST,
  payload,
});
export const addContactSuccess = (
  payload: AddContactSuccessPayload
): AddContactSuccess => ({
  type: ADD_CONTACT_SUCCESS,
  payload,
});
export const addContactFailure = (
  payload: AddContactFailurePayload
): AddContactFailure => ({
  type: ADD_CONTACT_FAILURE,
  payload,
});

// *****************EDIT******************
export const editContactRequest = (
  payload: EditContactPayload
): EditContactRequest => ({
  type: EDIT_CONTACT_REQUEST,
  payload,
});
export const editContactSuccess = (
  payload: EditContactSuccessPayload
): EditContactSuccess => ({
  type: EDIT_CONTACT_SUCCESS,
  payload,
});
export const editContactFailure = (
  payload: EditContactFailurePayload
): EditContactFailure => ({
  type: EDIT_CONTACT_FAILURE,
  payload,
});

// *****************DELETE******************
export const deleteContactRequest = (
  payload: DeleteContactPayload
): DeleteContactRequest => ({
  type: DELETE_CONTACT_REQUEST,
  payload,
});
export const deleteContactSuccess = (
  payload: DeleteContactSuccessPayload
): DeleteContactSuccess => ({
  type: DELETE_CONTACT_SUCCESS,
  payload,
});
export const deleteContactFailure = (
  payload: DeleteContactFailurePayload
): DeleteContactFailure => ({
  type: DELETE_CONTACT_FAILURE,
  payload,
});

// *****************GET BY ID******************
export const getContactByIdRequest = (
  payload: GetContactByIdPayload
): GetContactByIdRequest => ({
  type: GET_CONTACT_BY_ID_REQUEST,
  payload,
});
export const getContactByIdSuccess = (
  payload: GetContactByIdSuccessPayload
): GetContactByIdSuccess => ({
  type: GET_CONTACT_BY_ID_SUCCESS,
  payload,
});
export const getContactByIdFailure = (
  payload: GetContactByIdFailurePayload
): GetContactByIdFailure => ({
  type: GET_CONTACT_BY_ID_FAILURE,
  payload,
});

// *****************FIND BY KEYWORD******************
export const findContactByKeywordRequest = (
  payload: FindContactByKeywordPayload
): FindContactByKeywordRequest => ({
  type: FIND_CONTACT_BY_KEYWORD_REQUEST,
  payload,
});
export const findContactByKeywordSuccess = (
  payload: FindContactByKeywordSuccessPayload
): FindContactByKeywordSuccess => ({
  type: FIND_CONTACT_BY_KEYWORD_SUCCESS,
  payload,
});
export const findContactByKeywordFailure = (
  payload: FindContactByKeywordFailurePayload
): FindContactByKeywordFailure => ({
  type: FIND_CONTACT_BY_KEYWORD_FAILURE,
  payload,
});
