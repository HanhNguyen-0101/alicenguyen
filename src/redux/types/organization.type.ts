import {
  ADD_ORGANIZATION_FAILURE,
  ADD_ORGANIZATION_REQUEST,
  ADD_ORGANIZATION_SUCCESS,
  DELETE_ORGANIZATION_FAILURE,
  DELETE_ORGANIZATION_REQUEST,
  DELETE_ORGANIZATION_SUCCESS,
  EDIT_ORGANIZATION_FAILURE,
  EDIT_ORGANIZATION_REQUEST,
  EDIT_ORGANIZATION_SUCCESS,
  FIND_ORGANIZATION_BY_KEYWORD_FAILURE,
  FIND_ORGANIZATION_BY_KEYWORD_REQUEST,
  FIND_ORGANIZATION_BY_KEYWORD_SUCCESS,
  GET_ORGANIZATION_BY_ID_FAILURE,
  GET_ORGANIZATION_BY_ID_REQUEST,
  GET_ORGANIZATION_BY_ID_SUCCESS,
  GET_ORGANIZATION_FAILURE,
  GET_ORGANIZATION_REQUEST,
  GET_ORGANIZATION_SUCCESS,
} from "../actionTypes/organization.actionTypes";

export interface IOrganizationModel {
  id: string | number;
  name: string;
  description: string;
}
export interface IOrganizationArrayModel {
  data: Array<IOrganizationModel>;
}
export interface IOrganizationResponse {
  data: { data: any; message: string };
  status: number;
}
export interface OrganizationState {
  organizationArr: Array<IOrganizationModel>;
  error: string | null;
  organization: IOrganizationModel | null;
  deleteMsg: string | null;
}
// *****************GET ALL******************
export interface GetOrganizationPayload {
  callback: any;
}
export interface GetOrganizationSuccessPayload {
  data: Array<IOrganizationModel>;
  message: string;
}
export interface GetOrganizationFailurePayload {
  error: string;
}

export interface GetOrganizationRequest {
  type: typeof GET_ORGANIZATION_REQUEST;
  payload: GetOrganizationPayload;
}
export type GetOrganizationSuccess = {
  type: typeof GET_ORGANIZATION_SUCCESS;
  payload: GetOrganizationSuccessPayload;
};
export type GetOrganizationFailure = {
  type: typeof GET_ORGANIZATION_FAILURE;
  payload: GetOrganizationFailurePayload;
};

// *****************ADD******************
export interface AddOrganizationPayload {
  values: IOrganizationModel;
  callback: any;
}
export interface AddOrganizationSuccessPayload {
  data: IOrganizationModel;
  message: string;
}
export interface AddOrganizationFailurePayload {
  error: string;
}

export interface AddOrganizationRequest {
  type: typeof ADD_ORGANIZATION_REQUEST;
  payload: AddOrganizationPayload;
}
export type AddOrganizationSuccess = {
  type: typeof ADD_ORGANIZATION_SUCCESS;
  payload: AddOrganizationSuccessPayload;
};
export type AddOrganizationFailure = {
  type: typeof ADD_ORGANIZATION_FAILURE;
  payload: AddOrganizationFailurePayload;
};

// *****************EDIT******************
export interface EditOrganizationPayload {
  values: IOrganizationModel;
  callback: any;
}
export interface EditOrganizationSuccessPayload {
  data: IOrganizationModel;
  message: string;
}
export interface EditOrganizationFailurePayload {
  error: string;
}

export interface EditOrganizationRequest {
  type: typeof EDIT_ORGANIZATION_REQUEST;
  payload: EditOrganizationPayload;
}
export type EditOrganizationSuccess = {
  type: typeof EDIT_ORGANIZATION_SUCCESS;
  payload: EditOrganizationSuccessPayload;
};
export type EditOrganizationFailure = {
  type: typeof EDIT_ORGANIZATION_FAILURE;
  payload: EditOrganizationFailurePayload;
};

// *****************DELETE******************
export interface DeleteOrganizationPayload {
  values: { organizationId: string | number };
  callback: any;
}
export interface DeleteOrganizationSuccessPayload {
  data: {message: string};
  message: string;
}
export interface DeleteOrganizationFailurePayload {
  error: string;
}

export interface DeleteOrganizationRequest {
  type: typeof DELETE_ORGANIZATION_REQUEST;
  payload: DeleteOrganizationPayload;
}
export type DeleteOrganizationSuccess = {
  type: typeof DELETE_ORGANIZATION_SUCCESS;
  payload: DeleteOrganizationSuccessPayload;
};
export type DeleteOrganizationFailure = {
  type: typeof DELETE_ORGANIZATION_FAILURE;
  payload: DeleteOrganizationFailurePayload;
};

// *****************GET BY ID******************
export interface GetOrganizationByIdPayload {
  values: { organizationId: string | number };
  callback: any;
}
export interface GetOrganizationByIdSuccessPayload {
  data: IOrganizationModel;
  message: string;
}
export interface GetOrganizationByIdFailurePayload {
  error: string;
}

export interface GetOrganizationByIdRequest {
  type: typeof GET_ORGANIZATION_BY_ID_REQUEST;
  payload: GetOrganizationByIdPayload;
}
export type GetOrganizationByIdSuccess = {
  type: typeof GET_ORGANIZATION_BY_ID_SUCCESS;
  payload: GetOrganizationByIdSuccessPayload;
};
export type GetOrganizationByIdFailure = {
  type: typeof GET_ORGANIZATION_BY_ID_FAILURE;
  payload: GetOrganizationByIdFailurePayload;
};

// *****************FIND BY KEYWORD******************
export interface FindOrganizationByKeywordPayload {
  values: { keyword: string | number };
  callback: any;
}
export interface FindOrganizationByKeywordSuccessPayload {
  data: Array<IOrganizationModel>;
  message: string;
}
export interface FindOrganizationByKeywordFailurePayload {
  error: string;
}

export interface FindOrganizationByKeywordRequest {
  type: typeof FIND_ORGANIZATION_BY_KEYWORD_REQUEST;
  payload: FindOrganizationByKeywordPayload;
}
export type FindOrganizationByKeywordSuccess = {
  type: typeof FIND_ORGANIZATION_BY_KEYWORD_SUCCESS;
  payload: FindOrganizationByKeywordSuccessPayload;
};
export type FindOrganizationByKeywordFailure = {
  type: typeof FIND_ORGANIZATION_BY_KEYWORD_FAILURE;
  payload: FindOrganizationByKeywordFailurePayload;
};

export type OrganizationActions =
  | GetOrganizationRequest
  | GetOrganizationSuccess
  | GetOrganizationFailure
  | AddOrganizationRequest
  | AddOrganizationSuccess
  | AddOrganizationFailure
  | EditOrganizationRequest
  | EditOrganizationSuccess
  | EditOrganizationFailure
  | DeleteOrganizationRequest
  | DeleteOrganizationSuccess
  | DeleteOrganizationFailure
  | GetOrganizationByIdRequest
  | GetOrganizationByIdSuccess
  | GetOrganizationByIdFailure
  | FindOrganizationByKeywordRequest
  | FindOrganizationByKeywordSuccess
  | FindOrganizationByKeywordFailure;
