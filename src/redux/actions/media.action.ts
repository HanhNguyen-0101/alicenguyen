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
import {
  AddMediaFailure,
  AddMediaFailurePayload,
  AddMediaPayload,
  AddMediaRequest,
  AddMediaSuccess,
  AddMediaSuccessPayload,
  DeleteMediaFailure,
  DeleteMediaFailurePayload,
  DeleteMediaPayload,
  DeleteMediaRequest,
  DeleteMediaSuccess,
  DeleteMediaSuccessPayload,
  EditMediaFailure,
  EditMediaFailurePayload,
  EditMediaPayload,
  EditMediaRequest,
  EditMediaSuccess,
  EditMediaSuccessPayload,
  FindMediaByKeywordFailure,
  FindMediaByKeywordFailurePayload,
  FindMediaByKeywordPayload,
  FindMediaByKeywordRequest,
  FindMediaByKeywordSuccess,
  FindMediaByKeywordSuccessPayload,
  GetMediaByIdFailure,
  GetMediaByIdFailurePayload,
  GetMediaByIdPayload,
  GetMediaByIdRequest,
  GetMediaByIdSuccess,
  GetMediaByIdSuccessPayload,
  GetMediaFailure,
  GetMediaFailurePayload,
  GetMediaPayload,
  GetMediaRequest,
  GetMediaSuccess,
  GetMediaSuccessPayload,
} from "../types/media.type";

// *****************GET ALL******************
export const getMediaRequest = (
  payload: GetMediaPayload
): GetMediaRequest => ({
  type: GET_MEDIA_REQUEST,
  payload,
});
export const getMediaSuccess = (
  payload: GetMediaSuccessPayload
): GetMediaSuccess => ({
  type: GET_MEDIA_SUCCESS,
  payload,
});
export const getMediaFailure = (
  payload: GetMediaFailurePayload
): GetMediaFailure => ({
  type: GET_MEDIA_FAILURE,
  payload,
});

// *****************ADD******************
export const addMediaRequest = (
  payload: AddMediaPayload
): AddMediaRequest => ({
  type: ADD_MEDIA_REQUEST,
  payload,
});
export const addMediaSuccess = (
  payload: AddMediaSuccessPayload
): AddMediaSuccess => ({
  type: ADD_MEDIA_SUCCESS,
  payload,
});
export const addMediaFailure = (
  payload: AddMediaFailurePayload
): AddMediaFailure => ({
  type: ADD_MEDIA_FAILURE,
  payload,
});

// *****************EDIT******************
export const editMediaRequest = (
  payload: EditMediaPayload
): EditMediaRequest => ({
  type: EDIT_MEDIA_REQUEST,
  payload,
});
export const editMediaSuccess = (
  payload: EditMediaSuccessPayload
): EditMediaSuccess => ({
  type: EDIT_MEDIA_SUCCESS,
  payload,
});
export const editMediaFailure = (
  payload: EditMediaFailurePayload
): EditMediaFailure => ({
  type: EDIT_MEDIA_FAILURE,
  payload,
});

// *****************DELETE******************
export const deleteMediaRequest = (
  payload: DeleteMediaPayload
): DeleteMediaRequest => ({
  type: DELETE_MEDIA_REQUEST,
  payload,
});
export const deleteMediaSuccess = (
  payload: DeleteMediaSuccessPayload
): DeleteMediaSuccess => ({
  type: DELETE_MEDIA_SUCCESS,
  payload,
});
export const deleteMediaFailure = (
  payload: DeleteMediaFailurePayload
): DeleteMediaFailure => ({
  type: DELETE_MEDIA_FAILURE,
  payload,
});

// *****************GET BY ID******************
export const getMediaByIdRequest = (
  payload: GetMediaByIdPayload
): GetMediaByIdRequest => ({
  type: GET_MEDIA_BY_ID_REQUEST,
  payload,
});
export const getMediaByIdSuccess = (
  payload: GetMediaByIdSuccessPayload
): GetMediaByIdSuccess => ({
  type: GET_MEDIA_BY_ID_SUCCESS,
  payload,
});
export const getMediaByIdFailure = (
  payload: GetMediaByIdFailurePayload
): GetMediaByIdFailure => ({
  type: GET_MEDIA_BY_ID_FAILURE,
  payload,
});

// *****************FIND BY KEYWORD******************
export const findMediaByKeywordRequest = (
  payload: FindMediaByKeywordPayload
): FindMediaByKeywordRequest => ({
  type: FIND_MEDIA_BY_KEYWORD_REQUEST,
  payload,
});
export const findMediaByKeywordSuccess = (
  payload: FindMediaByKeywordSuccessPayload
): FindMediaByKeywordSuccess => ({
  type: FIND_MEDIA_BY_KEYWORD_SUCCESS,
  payload,
});
export const findMediaByKeywordFailure = (
  payload: FindMediaByKeywordFailurePayload
): FindMediaByKeywordFailure => ({
  type: FIND_MEDIA_BY_KEYWORD_FAILURE,
  payload,
});
