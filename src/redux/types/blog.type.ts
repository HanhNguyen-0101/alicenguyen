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
import { IMediaModel } from "./media.type";
import { ISubCategoryModel } from "./subCategory.type";

export interface IBlogModel {
  id: string;
  title: string;
  subTitle: string;
  subCategoryId: string;
  subCategory: ISubCategoryModel;
  thumnail: string;
  media: IMediaModel;
  description: string;
  content: string;
  updatedAt: string;
  createdAt: string;
}
export interface IBlogArrayModel {
  data: Array<IBlogModel>;
}
export interface IBlogResponse {
  data: { data: any; message: string };
  status: number;
}
export interface BlogState {
  blogArr: Array<IBlogModel>;
  error: string | null;
  blog: IBlogModel | null;
  deleteMsg: string | null;
}
// *****************GET ALL******************
export interface GetBlogPayload {
  callback: any;
}
export interface GetBlogSuccessPayload {
  data: Array<IBlogModel>;
  message: string;
}
export interface GetBlogFailurePayload {
  error: string;
}

export interface GetBlogRequest {
  type: typeof GET_BLOG_REQUEST;
  payload: GetBlogPayload;
}
export type GetBlogSuccess = {
  type: typeof GET_BLOG_SUCCESS;
  payload: GetBlogSuccessPayload;
};
export type GetBlogFailure = {
  type: typeof GET_BLOG_FAILURE;
  payload: GetBlogFailurePayload;
};

// *****************ADD******************
export interface AddBlogPayload {
  values: IBlogModel;
  callback: any;
}
export interface AddBlogSuccessPayload {
  data: IBlogModel;
  message: string;
}
export interface AddBlogFailurePayload {
  error: string;
}

export interface AddBlogRequest {
  type: typeof ADD_BLOG_REQUEST;
  payload: AddBlogPayload;
}
export type AddBlogSuccess = {
  type: typeof ADD_BLOG_SUCCESS;
  payload: AddBlogSuccessPayload;
};
export type AddBlogFailure = {
  type: typeof ADD_BLOG_FAILURE;
  payload: AddBlogFailurePayload;
};

// *****************EDIT******************
export interface EditBlogPayload {
  values: IBlogModel;
  callback: any;
}
export interface EditBlogSuccessPayload {
  data: IBlogModel;
  message: string;
}
export interface EditBlogFailurePayload {
  error: string;
}

export interface EditBlogRequest {
  type: typeof EDIT_BLOG_REQUEST;
  payload: EditBlogPayload;
}
export type EditBlogSuccess = {
  type: typeof EDIT_BLOG_SUCCESS;
  payload: EditBlogSuccessPayload;
};
export type EditBlogFailure = {
  type: typeof EDIT_BLOG_FAILURE;
  payload: EditBlogFailurePayload;
};

// *****************DELETE******************
export interface DeleteBlogPayload {
  values: { blogId: string | number };
  callback: any;
}
export interface DeleteBlogSuccessPayload {
  data: { message: string };
  message: string;
}
export interface DeleteBlogFailurePayload {
  error: string;
}

export interface DeleteBlogRequest {
  type: typeof DELETE_BLOG_REQUEST;
  payload: DeleteBlogPayload;
}
export type DeleteBlogSuccess = {
  type: typeof DELETE_BLOG_SUCCESS;
  payload: DeleteBlogSuccessPayload;
};
export type DeleteBlogFailure = {
  type: typeof DELETE_BLOG_FAILURE;
  payload: DeleteBlogFailurePayload;
};

// *****************GET BY ID******************
export interface GetBlogByIdPayload {
  values: { blogId: string | number };
  callback: any;
}
export interface GetBlogByIdSuccessPayload {
  data: IBlogModel;
  message: string;
}
export interface GetBlogByIdFailurePayload {
  error: string;
}

export interface GetBlogByIdRequest {
  type: typeof GET_BLOG_BY_ID_REQUEST;
  payload: GetBlogByIdPayload;
}
export type GetBlogByIdSuccess = {
  type: typeof GET_BLOG_BY_ID_SUCCESS;
  payload: GetBlogByIdSuccessPayload;
};
export type GetBlogByIdFailure = {
  type: typeof GET_BLOG_BY_ID_FAILURE;
  payload: GetBlogByIdFailurePayload;
};

// *****************FIND BY KEYWORD******************
export interface FindBlogByKeywordPayload {
  values: { keyword: string | number };
  callback: any;
}
export interface FindBlogByKeywordSuccessPayload {
  data: Array<IBlogModel>;
  message: string;
}
export interface FindBlogByKeywordFailurePayload {
  error: string;
}

export interface FindBlogByKeywordRequest {
  type: typeof FIND_BLOG_BY_KEYWORD_REQUEST;
  payload: FindBlogByKeywordPayload;
}
export type FindBlogByKeywordSuccess = {
  type: typeof FIND_BLOG_BY_KEYWORD_SUCCESS;
  payload: FindBlogByKeywordSuccessPayload;
};
export type FindBlogByKeywordFailure = {
  type: typeof FIND_BLOG_BY_KEYWORD_FAILURE;
  payload: FindBlogByKeywordFailurePayload;
};

// *****************FIND BY SUBCATEGORY ID******************
export interface FindBlogBySubCategoryIdPayload {
  values: { subCategoryId: string | number };
  callback: any;
}
export interface FindBlogBySubCategoryIdSuccessPayload {
  data: Array<IBlogModel>;
  message: string;
}
export interface FindBlogBySubCategoryIdFailurePayload {
  error: string;
}

export interface FindBlogBySubCategoryIdRequest {
  type: typeof FIND_BLOG_BY_SUBCATEGORY_ID_REQUEST;
  payload: FindBlogBySubCategoryIdPayload;
}
export type FindBlogBySubCategoryIdSuccess = {
  type: typeof FIND_BLOG_BY_SUBCATEGORY_ID_SUCCESS;
  payload: FindBlogBySubCategoryIdSuccessPayload;
};
export type FindBlogBySubCategoryIdFailure = {
  type: typeof FIND_BLOG_BY_SUBCATEGORY_ID_FAILURE;
  payload: FindBlogBySubCategoryIdFailurePayload;
};

export type BlogActions =
  | GetBlogRequest
  | GetBlogSuccess
  | GetBlogFailure
  | AddBlogRequest
  | AddBlogSuccess
  | AddBlogFailure
  | EditBlogRequest
  | EditBlogSuccess
  | EditBlogFailure
  | DeleteBlogRequest
  | DeleteBlogSuccess
  | DeleteBlogFailure
  | GetBlogByIdRequest
  | GetBlogByIdSuccess
  | GetBlogByIdFailure
  | FindBlogByKeywordRequest
  | FindBlogByKeywordSuccess
  | FindBlogByKeywordFailure
  | FindBlogBySubCategoryIdRequest
  | FindBlogBySubCategoryIdSuccess
  | FindBlogBySubCategoryIdFailure;
