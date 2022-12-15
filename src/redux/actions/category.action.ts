import {
  ADD_CATEGORY_FAILURE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILURE,
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY_SUCCESS,
  FIND_CATEGORY_BY_KEYWORD_FAILURE,
  FIND_CATEGORY_BY_KEYWORD_REQUEST,
  FIND_CATEGORY_BY_KEYWORD_SUCCESS,
  GET_CATEGORY_BY_ID_FAILURE,
  GET_CATEGORY_BY_ID_REQUEST,
  GET_CATEGORY_BY_ID_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
} from "../actionTypes/category.actionTypes";
import {
  AddCategoryFailure,
  AddCategoryFailurePayload,
  AddCategoryPayload,
  AddCategoryRequest,
  AddCategorySuccess,
  AddCategorySuccessPayload,
  DeleteCategoryFailure,
  DeleteCategoryFailurePayload,
  DeleteCategoryPayload,
  DeleteCategoryRequest,
  DeleteCategorySuccess,
  DeleteCategorySuccessPayload,
  EditCategoryFailure,
  EditCategoryFailurePayload,
  EditCategoryPayload,
  EditCategoryRequest,
  EditCategorySuccess,
  EditCategorySuccessPayload,
  FindCategoryByKeywordFailure,
  FindCategoryByKeywordFailurePayload,
  FindCategoryByKeywordPayload,
  FindCategoryByKeywordRequest,
  FindCategoryByKeywordSuccess,
  FindCategoryByKeywordSuccessPayload,
  GetCategoryByIdFailure,
  GetCategoryByIdFailurePayload,
  GetCategoryByIdPayload,
  GetCategoryByIdRequest,
  GetCategoryByIdSuccess,
  GetCategoryByIdSuccessPayload,
  GetCategoryFailure,
  GetCategoryFailurePayload,
  GetCategoryPayload,
  GetCategoryRequest,
  GetCategorySuccess,
  GetCategorySuccessPayload,
} from "../types/category.type";

// *****************GET ALL******************
export const getCategoryRequest = (
  payload: GetCategoryPayload
): GetCategoryRequest => ({
  type: GET_CATEGORY_REQUEST,
  payload,
});
export const getCategorySuccess = (
  payload: GetCategorySuccessPayload
): GetCategorySuccess => ({
  type: GET_CATEGORY_SUCCESS,
  payload,
});
export const getCategoryFailure = (
  payload: GetCategoryFailurePayload
): GetCategoryFailure => ({
  type: GET_CATEGORY_FAILURE,
  payload,
});

// *****************ADD******************
export const addCategoryRequest = (
  payload: AddCategoryPayload
): AddCategoryRequest => ({
  type: ADD_CATEGORY_REQUEST,
  payload,
});
export const addCategorySuccess = (
  payload: AddCategorySuccessPayload
): AddCategorySuccess => ({
  type: ADD_CATEGORY_SUCCESS,
  payload,
});
export const addCategoryFailure = (
  payload: AddCategoryFailurePayload
): AddCategoryFailure => ({
  type: ADD_CATEGORY_FAILURE,
  payload,
});

// *****************EDIT******************
export const editCategoryRequest = (
  payload: EditCategoryPayload
): EditCategoryRequest => ({
  type: EDIT_CATEGORY_REQUEST,
  payload,
});
export const editCategorySuccess = (
  payload: EditCategorySuccessPayload
): EditCategorySuccess => ({
  type: EDIT_CATEGORY_SUCCESS,
  payload,
});
export const editCategoryFailure = (
  payload: EditCategoryFailurePayload
): EditCategoryFailure => ({
  type: EDIT_CATEGORY_FAILURE,
  payload,
});

// *****************DELETE******************
export const deleteCategoryRequest = (
  payload: DeleteCategoryPayload
): DeleteCategoryRequest => ({
  type: DELETE_CATEGORY_REQUEST,
  payload,
});
export const deleteCategorySuccess = (
  payload: DeleteCategorySuccessPayload
): DeleteCategorySuccess => ({
  type: DELETE_CATEGORY_SUCCESS,
  payload,
});
export const deleteCategoryFailure = (
  payload: DeleteCategoryFailurePayload
): DeleteCategoryFailure => ({
  type: DELETE_CATEGORY_FAILURE,
  payload,
});

// *****************GET BY ID******************
export const getCategoryByIdRequest = (
  payload: GetCategoryByIdPayload
): GetCategoryByIdRequest => ({
  type: GET_CATEGORY_BY_ID_REQUEST,
  payload,
});
export const getCategoryByIdSuccess = (
  payload: GetCategoryByIdSuccessPayload
): GetCategoryByIdSuccess => ({
  type: GET_CATEGORY_BY_ID_SUCCESS,
  payload,
});
export const getCategoryByIdFailure = (
  payload: GetCategoryByIdFailurePayload
): GetCategoryByIdFailure => ({
  type: GET_CATEGORY_BY_ID_FAILURE,
  payload,
});

// *****************FIND BY KEYWORD******************
export const findCategoryByKeywordRequest = (
  payload: FindCategoryByKeywordPayload
): FindCategoryByKeywordRequest => ({
  type: FIND_CATEGORY_BY_KEYWORD_REQUEST,
  payload,
});
export const findCategoryByKeywordSuccess = (
  payload: FindCategoryByKeywordSuccessPayload
): FindCategoryByKeywordSuccess => ({
  type: FIND_CATEGORY_BY_KEYWORD_SUCCESS,
  payload,
});
export const findCategoryByKeywordFailure = (
  payload: FindCategoryByKeywordFailurePayload
): FindCategoryByKeywordFailure => ({
  type: FIND_CATEGORY_BY_KEYWORD_FAILURE,
  payload,
});
