import {
  ADD_SUBCATEGORY_FAILURE,
  ADD_SUBCATEGORY_REQUEST,
  ADD_SUBCATEGORY_SUCCESS,
  DELETE_SUBCATEGORY_FAILURE,
  DELETE_SUBCATEGORY_REQUEST,
  DELETE_SUBCATEGORY_SUCCESS,
  EDIT_SUBCATEGORY_FAILURE,
  EDIT_SUBCATEGORY_REQUEST,
  EDIT_SUBCATEGORY_SUCCESS,
  FIND_SUBCATEGORY_BY_KEYWORD_FAILURE,
  FIND_SUBCATEGORY_BY_KEYWORD_REQUEST,
  FIND_SUBCATEGORY_BY_KEYWORD_SUCCESS,
  GET_SUBCATEGORY_BY_ID_FAILURE,
  GET_SUBCATEGORY_BY_ID_REQUEST,
  GET_SUBCATEGORY_BY_ID_SUCCESS,
  GET_SUBCATEGORY_FAILURE,
  GET_SUBCATEGORY_REQUEST,
  GET_SUBCATEGORY_SUCCESS,
} from "../actionTypes/subCategory.actionTypes";
import {
  AddSubCategoryFailure,
  AddSubCategoryFailurePayload,
  AddSubCategoryPayload,
  AddSubCategoryRequest,
  AddSubCategorySuccess,
  AddSubCategorySuccessPayload,
  DeleteSubCategoryFailure,
  DeleteSubCategoryFailurePayload,
  DeleteSubCategoryPayload,
  DeleteSubCategoryRequest,
  DeleteSubCategorySuccess,
  DeleteSubCategorySuccessPayload,
  EditSubCategoryFailure,
  EditSubCategoryFailurePayload,
  EditSubCategoryPayload,
  EditSubCategoryRequest,
  EditSubCategorySuccess,
  EditSubCategorySuccessPayload,
  FindSubCategoryByKeywordFailure,
  FindSubCategoryByKeywordFailurePayload,
  FindSubCategoryByKeywordPayload,
  FindSubCategoryByKeywordRequest,
  FindSubCategoryByKeywordSuccess,
  FindSubCategoryByKeywordSuccessPayload,
  GetSubCategoryByIdFailure,
  GetSubCategoryByIdFailurePayload,
  GetSubCategoryByIdPayload,
  GetSubCategoryByIdRequest,
  GetSubCategoryByIdSuccess,
  GetSubCategoryByIdSuccessPayload,
  GetSubCategoryFailure,
  GetSubCategoryFailurePayload,
  GetSubCategoryPayload,
  GetSubCategoryRequest,
  GetSubCategorySuccess,
  GetSubCategorySuccessPayload,
} from "../types/subCategory.type";

// *****************GET ALL******************
export const getSubCategoryRequest = (
  payload: GetSubCategoryPayload
): GetSubCategoryRequest => ({
  type: GET_SUBCATEGORY_REQUEST,
  payload,
});
export const getSubCategorySuccess = (
  payload: GetSubCategorySuccessPayload
): GetSubCategorySuccess => ({
  type: GET_SUBCATEGORY_SUCCESS,
  payload,
});
export const getSubCategoryFailure = (
  payload: GetSubCategoryFailurePayload
): GetSubCategoryFailure => ({
  type: GET_SUBCATEGORY_FAILURE,
  payload,
});

// *****************ADD******************
export const addSubCategoryRequest = (
  payload: AddSubCategoryPayload
): AddSubCategoryRequest => ({
  type: ADD_SUBCATEGORY_REQUEST,
  payload,
});
export const addSubCategorySuccess = (
  payload: AddSubCategorySuccessPayload
): AddSubCategorySuccess => ({
  type: ADD_SUBCATEGORY_SUCCESS,
  payload,
});
export const addSubCategoryFailure = (
  payload: AddSubCategoryFailurePayload
): AddSubCategoryFailure => ({
  type: ADD_SUBCATEGORY_FAILURE,
  payload,
});

// *****************EDIT******************
export const editSubCategoryRequest = (
  payload: EditSubCategoryPayload
): EditSubCategoryRequest => ({
  type: EDIT_SUBCATEGORY_REQUEST,
  payload,
});
export const editSubCategorySuccess = (
  payload: EditSubCategorySuccessPayload
): EditSubCategorySuccess => ({
  type: EDIT_SUBCATEGORY_SUCCESS,
  payload,
});
export const editSubCategoryFailure = (
  payload: EditSubCategoryFailurePayload
): EditSubCategoryFailure => ({
  type: EDIT_SUBCATEGORY_FAILURE,
  payload,
});

// *****************DELETE******************
export const deleteSubCategoryRequest = (
  payload: DeleteSubCategoryPayload
): DeleteSubCategoryRequest => ({
  type: DELETE_SUBCATEGORY_REQUEST,
  payload,
});
export const deleteSubCategorySuccess = (
  payload: DeleteSubCategorySuccessPayload
): DeleteSubCategorySuccess => ({
  type: DELETE_SUBCATEGORY_SUCCESS,
  payload,
});
export const deleteSubCategoryFailure = (
  payload: DeleteSubCategoryFailurePayload
): DeleteSubCategoryFailure => ({
  type: DELETE_SUBCATEGORY_FAILURE,
  payload,
});

// *****************GET BY ID******************
export const getSubCategoryByIdRequest = (
  payload: GetSubCategoryByIdPayload
): GetSubCategoryByIdRequest => ({
  type: GET_SUBCATEGORY_BY_ID_REQUEST,
  payload,
});
export const getSubCategoryByIdSuccess = (
  payload: GetSubCategoryByIdSuccessPayload
): GetSubCategoryByIdSuccess => ({
  type: GET_SUBCATEGORY_BY_ID_SUCCESS,
  payload,
});
export const getSubCategoryByIdFailure = (
  payload: GetSubCategoryByIdFailurePayload
): GetSubCategoryByIdFailure => ({
  type: GET_SUBCATEGORY_BY_ID_FAILURE,
  payload,
});

// *****************FIND BY KEYWORD******************
export const findSubCategoryByKeywordRequest = (
  payload: FindSubCategoryByKeywordPayload
): FindSubCategoryByKeywordRequest => ({
  type: FIND_SUBCATEGORY_BY_KEYWORD_REQUEST,
  payload,
});
export const findSubCategoryByKeywordSuccess = (
  payload: FindSubCategoryByKeywordSuccessPayload
): FindSubCategoryByKeywordSuccess => ({
  type: FIND_SUBCATEGORY_BY_KEYWORD_SUCCESS,
  payload,
});
export const findSubCategoryByKeywordFailure = (
  payload: FindSubCategoryByKeywordFailurePayload
): FindSubCategoryByKeywordFailure => ({
  type: FIND_SUBCATEGORY_BY_KEYWORD_FAILURE,
  payload,
});
