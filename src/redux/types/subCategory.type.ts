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
import { ICategoryModel } from "./category.type";

export interface ISubCategoryModel {
  id: string | number;
  categoryId: string;
  category: ICategoryModel;
  name: string;
  description: string;
}
export interface ISubCategoryArrayModel {
  data: Array<ISubCategoryModel>;
}
export interface ISubCategoryResponse {
  data: { data: any; message: string };
  status: number;
}
export interface SubCategoryState {
  subCategoryArr: Array<ISubCategoryModel>;
  error: string | null;
  subCategory: ISubCategoryModel | null;
  deleteMsg: string | null;
}
// *****************GET ALL******************
export interface GetSubCategoryPayload {
  callback: any;
}
export interface GetSubCategorySuccessPayload {
  data: Array<ISubCategoryModel>;
  message: string;
}
export interface GetSubCategoryFailurePayload {
  error: string;
}

export interface GetSubCategoryRequest {
  type: typeof GET_SUBCATEGORY_REQUEST;
  payload: GetSubCategoryPayload;
}
export type GetSubCategorySuccess = {
  type: typeof GET_SUBCATEGORY_SUCCESS;
  payload: GetSubCategorySuccessPayload;
};
export type GetSubCategoryFailure = {
  type: typeof GET_SUBCATEGORY_FAILURE;
  payload: GetSubCategoryFailurePayload;
};

// *****************ADD******************
export interface AddSubCategoryPayload {
  values: ISubCategoryModel;
  callback: any;
}
export interface AddSubCategorySuccessPayload {
  data: ISubCategoryModel;
  message: string;
}
export interface AddSubCategoryFailurePayload {
  error: string;
}

export interface AddSubCategoryRequest {
  type: typeof ADD_SUBCATEGORY_REQUEST;
  payload: AddSubCategoryPayload;
}
export type AddSubCategorySuccess = {
  type: typeof ADD_SUBCATEGORY_SUCCESS;
  payload: AddSubCategorySuccessPayload;
};
export type AddSubCategoryFailure = {
  type: typeof ADD_SUBCATEGORY_FAILURE;
  payload: AddSubCategoryFailurePayload;
};

// *****************EDIT******************
export interface EditSubCategoryPayload {
  values: ISubCategoryModel;
  callback: any;
}
export interface EditSubCategorySuccessPayload {
  data: ISubCategoryModel;
  message: string;
}
export interface EditSubCategoryFailurePayload {
  error: string;
}

export interface EditSubCategoryRequest {
  type: typeof EDIT_SUBCATEGORY_REQUEST;
  payload: EditSubCategoryPayload;
}
export type EditSubCategorySuccess = {
  type: typeof EDIT_SUBCATEGORY_SUCCESS;
  payload: EditSubCategorySuccessPayload;
};
export type EditSubCategoryFailure = {
  type: typeof EDIT_SUBCATEGORY_FAILURE;
  payload: EditSubCategoryFailurePayload;
};

// *****************DELETE******************
export interface DeleteSubCategoryPayload {
  values: { subCategoryId: string | number };
  callback: any;
}
export interface DeleteSubCategorySuccessPayload {
  data: { message: string };
  message: string;
}
export interface DeleteSubCategoryFailurePayload {
  error: string;
}

export interface DeleteSubCategoryRequest {
  type: typeof DELETE_SUBCATEGORY_REQUEST;
  payload: DeleteSubCategoryPayload;
}
export type DeleteSubCategorySuccess = {
  type: typeof DELETE_SUBCATEGORY_SUCCESS;
  payload: DeleteSubCategorySuccessPayload;
};
export type DeleteSubCategoryFailure = {
  type: typeof DELETE_SUBCATEGORY_FAILURE;
  payload: DeleteSubCategoryFailurePayload;
};

// *****************GET BY ID******************
export interface GetSubCategoryByIdPayload {
  values: { subCategoryId: string | number };
  callback: any;
}
export interface GetSubCategoryByIdSuccessPayload {
  data: ISubCategoryModel;
  message: string;
}
export interface GetSubCategoryByIdFailurePayload {
  error: string;
}

export interface GetSubCategoryByIdRequest {
  type: typeof GET_SUBCATEGORY_BY_ID_REQUEST;
  payload: GetSubCategoryByIdPayload;
}
export type GetSubCategoryByIdSuccess = {
  type: typeof GET_SUBCATEGORY_BY_ID_SUCCESS;
  payload: GetSubCategoryByIdSuccessPayload;
};
export type GetSubCategoryByIdFailure = {
  type: typeof GET_SUBCATEGORY_BY_ID_FAILURE;
  payload: GetSubCategoryByIdFailurePayload;
};

// *****************FIND BY KEYWORD******************
export interface FindSubCategoryByKeywordPayload {
  values: { keyword: string | number };
  callback: any;
}
export interface FindSubCategoryByKeywordSuccessPayload {
  data: Array<ISubCategoryModel>;
  message: string;
}
export interface FindSubCategoryByKeywordFailurePayload {
  error: string;
}

export interface FindSubCategoryByKeywordRequest {
  type: typeof FIND_SUBCATEGORY_BY_KEYWORD_REQUEST;
  payload: FindSubCategoryByKeywordPayload;
}
export type FindSubCategoryByKeywordSuccess = {
  type: typeof FIND_SUBCATEGORY_BY_KEYWORD_SUCCESS;
  payload: FindSubCategoryByKeywordSuccessPayload;
};
export type FindSubCategoryByKeywordFailure = {
  type: typeof FIND_SUBCATEGORY_BY_KEYWORD_FAILURE;
  payload: FindSubCategoryByKeywordFailurePayload;
};

export type SubCategoryActions =
  | GetSubCategoryRequest
  | GetSubCategorySuccess
  | GetSubCategoryFailure
  | AddSubCategoryRequest
  | AddSubCategorySuccess
  | AddSubCategoryFailure
  | EditSubCategoryRequest
  | EditSubCategorySuccess
  | EditSubCategoryFailure
  | DeleteSubCategoryRequest
  | DeleteSubCategorySuccess
  | DeleteSubCategoryFailure
  | GetSubCategoryByIdRequest
  | GetSubCategoryByIdSuccess
  | GetSubCategoryByIdFailure
  | FindSubCategoryByKeywordRequest
  | FindSubCategoryByKeywordSuccess
  | FindSubCategoryByKeywordFailure;
