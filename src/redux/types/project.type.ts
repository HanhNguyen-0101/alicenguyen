import {
  ADD_PROJECT_FAILURE,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE,
  EDIT_PROJECT_REQUEST,
  EDIT_PROJECT_SUCCESS,
  FIND_PROJECT_BY_KEYWORD_FAILURE,
  FIND_PROJECT_BY_KEYWORD_REQUEST,
  FIND_PROJECT_BY_KEYWORD_SUCCESS,
  GET_PROJECT_BY_ID_FAILURE,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_FAILURE,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
} from "../actionTypes/project.actionTypes";
import { IOrganizationModel } from "./organization.type";
import { ISubCategoryModel } from "./subCategory.type";

export interface IProjectModel {
  id: string | number;
  name: string;
  link: string;
  description: string;
  technical: string;
  date: string | any;
  members: string;
  organizationId: string;
  organization: IOrganizationModel;
  images: string;
  subCategoryId: string;
  subCategory: ISubCategoryModel;
}
export interface IProjectArrayModel {
  data: Array<IProjectModel>;
}
export interface IProjectResponse {
  data: { data: any; message: string };
  status: number;
}
export interface ProjectState {
  projectArr: Array<IProjectModel>;
  error: string | null;
  project: IProjectModel | null;
  deleteMsg: string | null;
}
// *****************GET ALL******************
export interface GetProjectPayload {
  callback: any;
}
export interface GetProjectSuccessPayload {
  data: Array<IProjectModel>;
  message: string;
}
export interface GetProjectFailurePayload {
  error: string;
}

export interface GetProjectRequest {
  type: typeof GET_PROJECT_REQUEST;
  payload: GetProjectPayload;
}
export type GetProjectSuccess = {
  type: typeof GET_PROJECT_SUCCESS;
  payload: GetProjectSuccessPayload;
};
export type GetProjectFailure = {
  type: typeof GET_PROJECT_FAILURE;
  payload: GetProjectFailurePayload;
};

// *****************ADD******************
export interface AddProjectPayload {
  values: IProjectModel;
  callback: any;
}
export interface AddProjectSuccessPayload {
  data: IProjectModel;
  message: string;
}
export interface AddProjectFailurePayload {
  error: string;
}

export interface AddProjectRequest {
  type: typeof ADD_PROJECT_REQUEST;
  payload: AddProjectPayload;
}
export type AddProjectSuccess = {
  type: typeof ADD_PROJECT_SUCCESS;
  payload: AddProjectSuccessPayload;
};
export type AddProjectFailure = {
  type: typeof ADD_PROJECT_FAILURE;
  payload: AddProjectFailurePayload;
};

// *****************EDIT******************
export interface EditProjectPayload {
  values: IProjectModel;
  callback: any;
}
export interface EditProjectSuccessPayload {
  data: IProjectModel;
  message: string;
}
export interface EditProjectFailurePayload {
  error: string;
}

export interface EditProjectRequest {
  type: typeof EDIT_PROJECT_REQUEST;
  payload: EditProjectPayload;
}
export type EditProjectSuccess = {
  type: typeof EDIT_PROJECT_SUCCESS;
  payload: EditProjectSuccessPayload;
};
export type EditProjectFailure = {
  type: typeof EDIT_PROJECT_FAILURE;
  payload: EditProjectFailurePayload;
};

// *****************DELETE******************
export interface DeleteProjectPayload {
  values: { projectId: string | number };
  callback: any;
}
export interface DeleteProjectSuccessPayload {
  data: { message: string };
  message: string;
}
export interface DeleteProjectFailurePayload {
  error: string;
}

export interface DeleteProjectRequest {
  type: typeof DELETE_PROJECT_REQUEST;
  payload: DeleteProjectPayload;
}
export type DeleteProjectSuccess = {
  type: typeof DELETE_PROJECT_SUCCESS;
  payload: DeleteProjectSuccessPayload;
};
export type DeleteProjectFailure = {
  type: typeof DELETE_PROJECT_FAILURE;
  payload: DeleteProjectFailurePayload;
};

// *****************GET BY ID******************
export interface GetProjectByIdPayload {
  values: { projectId: string | number };
  callback: any;
}
export interface GetProjectByIdSuccessPayload {
  data: IProjectModel;
  message: string;
}
export interface GetProjectByIdFailurePayload {
  error: string;
}

export interface GetProjectByIdRequest {
  type: typeof GET_PROJECT_BY_ID_REQUEST;
  payload: GetProjectByIdPayload;
}
export type GetProjectByIdSuccess = {
  type: typeof GET_PROJECT_BY_ID_SUCCESS;
  payload: GetProjectByIdSuccessPayload;
};
export type GetProjectByIdFailure = {
  type: typeof GET_PROJECT_BY_ID_FAILURE;
  payload: GetProjectByIdFailurePayload;
};

// *****************FIND BY KEYWORD******************
export interface FindProjectByKeywordPayload {
  values: { keyword: string | number };
  callback: any;
}
export interface FindProjectByKeywordSuccessPayload {
  data: Array<IProjectModel>;
  message: string;
}
export interface FindProjectByKeywordFailurePayload {
  error: string;
}

export interface FindProjectByKeywordRequest {
  type: typeof FIND_PROJECT_BY_KEYWORD_REQUEST;
  payload: FindProjectByKeywordPayload;
}
export type FindProjectByKeywordSuccess = {
  type: typeof FIND_PROJECT_BY_KEYWORD_SUCCESS;
  payload: FindProjectByKeywordSuccessPayload;
};
export type FindProjectByKeywordFailure = {
  type: typeof FIND_PROJECT_BY_KEYWORD_FAILURE;
  payload: FindProjectByKeywordFailurePayload;
};

export type ProjectActions =
  | GetProjectRequest
  | GetProjectSuccess
  | GetProjectFailure
  | AddProjectRequest
  | AddProjectSuccess
  | AddProjectFailure
  | EditProjectRequest
  | EditProjectSuccess
  | EditProjectFailure
  | DeleteProjectRequest
  | DeleteProjectSuccess
  | DeleteProjectFailure
  | GetProjectByIdRequest
  | GetProjectByIdSuccess
  | GetProjectByIdFailure
  | FindProjectByKeywordRequest
  | FindProjectByKeywordSuccess
  | FindProjectByKeywordFailure;
