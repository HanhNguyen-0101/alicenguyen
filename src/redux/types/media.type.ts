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
import { ISubCategoryModel } from "./subCategory.type";

export interface IMediaModel {
  id: string | number;
  subCategoryId: string;
  subCategory: ISubCategoryModel;
  src: string | any;
  enabled: boolean;
  title: string;
  description: string;
}
export interface IMediaResponse {
  data: { data: any; message: string };
  status: number;
}
export interface IMediaArrayModel {
  data: Array<IMediaModel>;
}
export interface MediaState {
  mediaArr: Array<IMediaModel>;
  error: string | null;
  media: IMediaModel | null;
  deleteMsg: string | null;
}
// *****************GET ALL******************
export interface GetMediaPayload {
  callback: any;
}
export interface GetMediaSuccessPayload {
  data: Array<IMediaModel>;
  message: string;
}
export interface GetMediaFailurePayload {
  error: string;
}

export interface GetMediaRequest {
  type: typeof GET_MEDIA_REQUEST;
  payload: GetMediaPayload;
}
export type GetMediaSuccess = {
  type: typeof GET_MEDIA_SUCCESS;
  payload: GetMediaSuccessPayload;
};
export type GetMediaFailure = {
  type: typeof GET_MEDIA_FAILURE;
  payload: GetMediaFailurePayload;
};

// *****************ADD******************
export interface AddMediaPayload {
  values: IMediaModel;
  callback: any;
}
export interface AddMediaSuccessPayload {
  data: IMediaModel;
  message: string;
}
export interface AddMediaFailurePayload {
  error: string;
}

export interface AddMediaRequest {
  type: typeof ADD_MEDIA_REQUEST;
  payload: AddMediaPayload;
}
export type AddMediaSuccess = {
  type: typeof ADD_MEDIA_SUCCESS;
  payload: AddMediaSuccessPayload;
};
export type AddMediaFailure = {
  type: typeof ADD_MEDIA_FAILURE;
  payload: AddMediaFailurePayload;
};

// *****************EDIT******************
export interface EditMediaPayload {
  values: IMediaModel;
  callback: any;
}
export interface EditMediaSuccessPayload {
  data: IMediaModel;
  message: string;
}
export interface EditMediaFailurePayload {
  error: string;
}

export interface EditMediaRequest {
  type: typeof EDIT_MEDIA_REQUEST;
  payload: EditMediaPayload;
}
export type EditMediaSuccess = {
  type: typeof EDIT_MEDIA_SUCCESS;
  payload: EditMediaSuccessPayload;
};
export type EditMediaFailure = {
  type: typeof EDIT_MEDIA_FAILURE;
  payload: EditMediaFailurePayload;
};

// *****************DELETE******************
export interface DeleteMediaPayload {
  values: { mediaId: string | number };
  callback: any;
}
export interface DeleteMediaSuccessPayload {
  data: { message: string };
  message: string;
}
export interface DeleteMediaFailurePayload {
  error: string;
}

export interface DeleteMediaRequest {
  type: typeof DELETE_MEDIA_REQUEST;
  payload: DeleteMediaPayload;
}
export type DeleteMediaSuccess = {
  type: typeof DELETE_MEDIA_SUCCESS;
  payload: DeleteMediaSuccessPayload;
};
export type DeleteMediaFailure = {
  type: typeof DELETE_MEDIA_FAILURE;
  payload: DeleteMediaFailurePayload;
};

// *****************GET BY ID******************
export interface GetMediaByIdPayload {
  values: { mediaId: string | number };
  callback: any;
}
export interface GetMediaByIdSuccessPayload {
  data: IMediaModel;
  message: string;
}
export interface GetMediaByIdFailurePayload {
  error: string;
}

export interface GetMediaByIdRequest {
  type: typeof GET_MEDIA_BY_ID_REQUEST;
  payload: GetMediaByIdPayload;
}
export type GetMediaByIdSuccess = {
  type: typeof GET_MEDIA_BY_ID_SUCCESS;
  payload: GetMediaByIdSuccessPayload;
};
export type GetMediaByIdFailure = {
  type: typeof GET_MEDIA_BY_ID_FAILURE;
  payload: GetMediaByIdFailurePayload;
};

// *****************FIND BY KEYWORD******************
export interface FindMediaByKeywordPayload {
  values: { keyword: string | number };
  callback: any;
}
export interface FindMediaByKeywordSuccessPayload {
  data: Array<IMediaModel>;
  message: string;
}
export interface FindMediaByKeywordFailurePayload {
  error: string;
}

export interface FindMediaByKeywordRequest {
  type: typeof FIND_MEDIA_BY_KEYWORD_REQUEST;
  payload: FindMediaByKeywordPayload;
}
export type FindMediaByKeywordSuccess = {
  type: typeof FIND_MEDIA_BY_KEYWORD_SUCCESS;
  payload: FindMediaByKeywordSuccessPayload;
};
export type FindMediaByKeywordFailure = {
  type: typeof FIND_MEDIA_BY_KEYWORD_FAILURE;
  payload: FindMediaByKeywordFailurePayload;
};

export type MediaActions =
  | GetMediaRequest
  | GetMediaSuccess
  | GetMediaFailure
  | AddMediaRequest
  | AddMediaSuccess
  | AddMediaFailure
  | EditMediaRequest
  | EditMediaSuccess
  | EditMediaFailure
  | DeleteMediaRequest
  | DeleteMediaSuccess
  | DeleteMediaFailure
  | GetMediaByIdRequest
  | GetMediaByIdSuccess
  | GetMediaByIdFailure
  | FindMediaByKeywordRequest
  | FindMediaByKeywordSuccess
  | FindMediaByKeywordFailure;
