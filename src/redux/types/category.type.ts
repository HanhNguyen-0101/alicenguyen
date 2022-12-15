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

export interface ICategoryModel {
  id: string | number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
export interface ICategoryArrayModel {
  data: Array<ICategoryModel>;
}
export interface ICategoryResponse {
  data: { data: any; message: string };
  status: number;
}
export interface CategoryState {
  categoryArr: Array<ICategoryModel>;
  error: string | null;
  category: ICategoryModel | null;
  deleteMsg: string | null;
}
// *****************GET ALL******************
export interface GetCategoryPayload {
  callback: any;
}
export interface GetCategorySuccessPayload {
  data: Array<ICategoryModel>;
  message: string;
}
export interface GetCategoryFailurePayload {
  error: string;
}

export interface GetCategoryRequest {
  type: typeof GET_CATEGORY_REQUEST;
  payload: GetCategoryPayload;
}
export type GetCategorySuccess = {
  type: typeof GET_CATEGORY_SUCCESS;
  payload: GetCategorySuccessPayload;
};
export type GetCategoryFailure = {
  type: typeof GET_CATEGORY_FAILURE;
  payload: GetCategoryFailurePayload;
};

// *****************ADD******************
export interface AddCategoryPayload {
  values: ICategoryModel;
  callback: any;
}
export interface AddCategorySuccessPayload {
  data: ICategoryModel;
  message: string;
}
export interface AddCategoryFailurePayload {
  error: string;
}

export interface AddCategoryRequest {
  type: typeof ADD_CATEGORY_REQUEST;
  payload: AddCategoryPayload;
}
export type AddCategorySuccess = {
  type: typeof ADD_CATEGORY_SUCCESS;
  payload: AddCategorySuccessPayload;
};
export type AddCategoryFailure = {
  type: typeof ADD_CATEGORY_FAILURE;
  payload: AddCategoryFailurePayload;
};

// *****************EDIT******************
export interface EditCategoryPayload {
  values: ICategoryModel;
  callback: any;
}
export interface EditCategorySuccessPayload {
  data: ICategoryModel;
  message: string;
}
export interface EditCategoryFailurePayload {
  error: string;
}

export interface EditCategoryRequest {
  type: typeof EDIT_CATEGORY_REQUEST;
  payload: EditCategoryPayload;
}
export type EditCategorySuccess = {
  type: typeof EDIT_CATEGORY_SUCCESS;
  payload: EditCategorySuccessPayload;
};
export type EditCategoryFailure = {
  type: typeof EDIT_CATEGORY_FAILURE;
  payload: EditCategoryFailurePayload;
};

// *****************DELETE******************
export interface DeleteCategoryPayload {
  values: { categoryId: string | number };
  callback: any;
}
export interface DeleteCategorySuccessPayload {
  data: { message: string };
  message: string;
}
export interface DeleteCategoryFailurePayload {
  error: string;
}

export interface DeleteCategoryRequest {
  type: typeof DELETE_CATEGORY_REQUEST;
  payload: DeleteCategoryPayload;
}
export type DeleteCategorySuccess = {
  type: typeof DELETE_CATEGORY_SUCCESS;
  payload: DeleteCategorySuccessPayload;
};
export type DeleteCategoryFailure = {
  type: typeof DELETE_CATEGORY_FAILURE;
  payload: DeleteCategoryFailurePayload;
};

// *****************GET BY ID******************
export interface GetCategoryByIdPayload {
  values: { categoryId: string | number };
  callback: any;
}
export interface GetCategoryByIdSuccessPayload {
  data: ICategoryModel;
  message: string;
}
export interface GetCategoryByIdFailurePayload {
  error: string;
}

export interface GetCategoryByIdRequest {
  type: typeof GET_CATEGORY_BY_ID_REQUEST;
  payload: GetCategoryByIdPayload;
}
export type GetCategoryByIdSuccess = {
  type: typeof GET_CATEGORY_BY_ID_SUCCESS;
  payload: GetCategoryByIdSuccessPayload;
};
export type GetCategoryByIdFailure = {
  type: typeof GET_CATEGORY_BY_ID_FAILURE;
  payload: GetCategoryByIdFailurePayload;
};

// *****************FIND BY KEYWORD******************
export interface FindCategoryByKeywordPayload {
  values: { keyword: string | number };
  callback: any;
}
export interface FindCategoryByKeywordSuccessPayload {
  data: Array<ICategoryModel>;
  message: string;
}
export interface FindCategoryByKeywordFailurePayload {
  error: string;
}

export interface FindCategoryByKeywordRequest {
  type: typeof FIND_CATEGORY_BY_KEYWORD_REQUEST;
  payload: FindCategoryByKeywordPayload;
}
export type FindCategoryByKeywordSuccess = {
  type: typeof FIND_CATEGORY_BY_KEYWORD_SUCCESS;
  payload: FindCategoryByKeywordSuccessPayload;
};
export type FindCategoryByKeywordFailure = {
  type: typeof FIND_CATEGORY_BY_KEYWORD_FAILURE;
  payload: FindCategoryByKeywordFailurePayload;
};

export type CategoryActions =
  | GetCategoryRequest
  | GetCategorySuccess
  | GetCategoryFailure
  | AddCategoryRequest
  | AddCategorySuccess
  | AddCategoryFailure
  | EditCategoryRequest
  | EditCategorySuccess
  | EditCategoryFailure
  | DeleteCategoryRequest
  | DeleteCategorySuccess
  | DeleteCategoryFailure
  | GetCategoryByIdRequest
  | GetCategoryByIdSuccess
  | GetCategoryByIdFailure
  | FindCategoryByKeywordRequest
  | FindCategoryByKeywordSuccess
  | FindCategoryByKeywordFailure;
