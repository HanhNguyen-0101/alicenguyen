import {
  ADD_BLOG_FAILURE,
  ADD_BLOG_REQUEST,
  ADD_BLOG_SUCCESS,
  DELETE_BLOG_FAILURE,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  EDIT_BLOG_FAILURE,
  EDIT_BLOG_REQUEST,
  EDIT_BLOG_SUCCESS,
  FIND_BLOG_BY_KEYWORD_FAILURE,
  FIND_BLOG_BY_KEYWORD_REQUEST,
  FIND_BLOG_BY_KEYWORD_SUCCESS,
  FIND_BLOG_BY_SUBCATEGORY_ID_FAILURE,
  FIND_BLOG_BY_SUBCATEGORY_ID_REQUEST,
  FIND_BLOG_BY_SUBCATEGORY_ID_SUCCESS,
  GET_BLOG_BY_ID_FAILURE,
  GET_BLOG_BY_ID_REQUEST,
  GET_BLOG_BY_ID_SUCCESS,
  GET_BLOG_FAILURE,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
} from "../actionTypes/blog.actionTypes";
import {
  AddBlogFailure,
  AddBlogFailurePayload,
  AddBlogPayload,
  AddBlogRequest,
  AddBlogSuccess,
  AddBlogSuccessPayload,
  DeleteBlogFailure,
  DeleteBlogFailurePayload,
  DeleteBlogPayload,
  DeleteBlogRequest,
  DeleteBlogSuccess,
  DeleteBlogSuccessPayload,
  EditBlogFailure,
  EditBlogFailurePayload,
  EditBlogPayload,
  EditBlogRequest,
  EditBlogSuccess,
  EditBlogSuccessPayload,
  FindBlogByKeywordFailure,
  FindBlogByKeywordFailurePayload,
  FindBlogByKeywordPayload,
  FindBlogByKeywordRequest,
  FindBlogByKeywordSuccess,
  FindBlogByKeywordSuccessPayload,
  FindBlogBySubCategoryIdFailure,
  FindBlogBySubCategoryIdFailurePayload,
  FindBlogBySubCategoryIdPayload,
  FindBlogBySubCategoryIdRequest,
  FindBlogBySubCategoryIdSuccess,
  FindBlogBySubCategoryIdSuccessPayload,
  GetBlogByIdFailure,
  GetBlogByIdFailurePayload,
  GetBlogByIdPayload,
  GetBlogByIdRequest,
  GetBlogByIdSuccess,
  GetBlogByIdSuccessPayload,
  GetBlogFailure,
  GetBlogFailurePayload,
  GetBlogPayload,
  GetBlogRequest,
  GetBlogSuccess,
  GetBlogSuccessPayload,
} from "../types/blog.type";

// *****************GET ALL******************
export const getBlogRequest = (
  payload: GetBlogPayload
): GetBlogRequest => ({
  type: GET_BLOG_REQUEST,
  payload,
});
export const getBlogSuccess = (
  payload: GetBlogSuccessPayload
): GetBlogSuccess => ({
  type: GET_BLOG_SUCCESS,
  payload,
});
export const getBlogFailure = (
  payload: GetBlogFailurePayload
): GetBlogFailure => ({
  type: GET_BLOG_FAILURE,
  payload,
});

// *****************ADD******************
export const addBlogRequest = (
  payload: AddBlogPayload
): AddBlogRequest => ({
  type: ADD_BLOG_REQUEST,
  payload,
});
export const addBlogSuccess = (
  payload: AddBlogSuccessPayload
): AddBlogSuccess => ({
  type: ADD_BLOG_SUCCESS,
  payload,
});
export const addBlogFailure = (
  payload: AddBlogFailurePayload
): AddBlogFailure => ({
  type: ADD_BLOG_FAILURE,
  payload,
});

// *****************EDIT******************
export const editBlogRequest = (
  payload: EditBlogPayload
): EditBlogRequest => ({
  type: EDIT_BLOG_REQUEST,
  payload,
});
export const editBlogSuccess = (
  payload: EditBlogSuccessPayload
): EditBlogSuccess => ({
  type: EDIT_BLOG_SUCCESS,
  payload,
});
export const editBlogFailure = (
  payload: EditBlogFailurePayload
): EditBlogFailure => ({
  type: EDIT_BLOG_FAILURE,
  payload,
});

// *****************DELETE******************
export const deleteBlogRequest = (
  payload: DeleteBlogPayload
): DeleteBlogRequest => ({
  type: DELETE_BLOG_REQUEST,
  payload,
});
export const deleteBlogSuccess = (
  payload: DeleteBlogSuccessPayload
): DeleteBlogSuccess => ({
  type: DELETE_BLOG_SUCCESS,
  payload,
});
export const deleteBlogFailure = (
  payload: DeleteBlogFailurePayload
): DeleteBlogFailure => ({
  type: DELETE_BLOG_FAILURE,
  payload,
});

// *****************GET BY ID******************
export const getBlogByIdRequest = (
  payload: GetBlogByIdPayload
): GetBlogByIdRequest => ({
  type: GET_BLOG_BY_ID_REQUEST,
  payload,
});
export const getBlogByIdSuccess = (
  payload: GetBlogByIdSuccessPayload
): GetBlogByIdSuccess => ({
  type: GET_BLOG_BY_ID_SUCCESS,
  payload,
});
export const getBlogByIdFailure = (
  payload: GetBlogByIdFailurePayload
): GetBlogByIdFailure => ({
  type: GET_BLOG_BY_ID_FAILURE,
  payload,
});

// *****************FIND BY KEYWORD******************
export const findBlogByKeywordRequest = (
  payload: FindBlogByKeywordPayload
): FindBlogByKeywordRequest => ({
  type: FIND_BLOG_BY_KEYWORD_REQUEST,
  payload,
});
export const findBlogByKeywordSuccess = (
  payload: FindBlogByKeywordSuccessPayload
): FindBlogByKeywordSuccess => ({
  type: FIND_BLOG_BY_KEYWORD_SUCCESS,
  payload,
});
export const findBlogByKeywordFailure = (
  payload: FindBlogByKeywordFailurePayload
): FindBlogByKeywordFailure => ({
  type: FIND_BLOG_BY_KEYWORD_FAILURE,
  payload,
});

// *****************FIND BY SUBCATEGORY ID******************
export const findBlogBySubCategoryIdRequest = (
  payload: FindBlogBySubCategoryIdPayload
): FindBlogBySubCategoryIdRequest => ({
  type: FIND_BLOG_BY_SUBCATEGORY_ID_REQUEST,
  payload,
});
export const findBlogBySubCategoryIdSuccess = (
  payload: FindBlogBySubCategoryIdSuccessPayload
): FindBlogBySubCategoryIdSuccess => ({
  type: FIND_BLOG_BY_SUBCATEGORY_ID_SUCCESS,
  payload,
});
export const findBlogBySubCategoryIdFailure = (
  payload: FindBlogBySubCategoryIdFailurePayload
): FindBlogBySubCategoryIdFailure => ({
  type: FIND_BLOG_BY_SUBCATEGORY_ID_FAILURE,
  payload,
});
