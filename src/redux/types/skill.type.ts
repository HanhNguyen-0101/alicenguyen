import {
  ADD_SKILL_FAILURE,
  ADD_SKILL_REQUEST,
  ADD_SKILL_SUCCESS,
  DELETE_SKILL_FAILURE,
  DELETE_SKILL_REQUEST,
  DELETE_SKILL_SUCCESS,
  EDIT_SKILL_FAILURE,
  EDIT_SKILL_REQUEST,
  EDIT_SKILL_SUCCESS,
  FIND_SKILL_BY_KEYWORD_FAILURE,
  FIND_SKILL_BY_KEYWORD_REQUEST,
  FIND_SKILL_BY_KEYWORD_SUCCESS,
  GET_SKILL_BY_ID_FAILURE,
  GET_SKILL_BY_ID_REQUEST,
  GET_SKILL_BY_ID_SUCCESS,
  GET_SKILL_FAILURE,
  GET_SKILL_REQUEST,
  GET_SKILL_SUCCESS,
} from "../actionTypes/skill.actionTypes";

export interface ISkillModel {
  id: string | number;
  name: string;
  description: string;
  rate: number;
}
export interface ISkillArrayModel {
  data: Array<ISkillModel>;
}
export interface ISkillResponse {
  data: { data: any; message: string };
  status: number;
}
export interface SkillState {
  skillArr: Array<ISkillModel>;
  error: string | null;
  skill: ISkillModel | null;
  deleteMsg: string | null;
}
// *****************GET ALL******************
export interface GetSkillPayload {
  callback: any;
}
export interface GetSkillSuccessPayload {
  data: Array<ISkillModel>;
  message: string;
}
export interface GetSkillFailurePayload {
  error: string;
}

export interface GetSkillRequest {
  type: typeof GET_SKILL_REQUEST;
  payload: GetSkillPayload;
}
export type GetSkillSuccess = {
  type: typeof GET_SKILL_SUCCESS;
  payload: GetSkillSuccessPayload;
};
export type GetSkillFailure = {
  type: typeof GET_SKILL_FAILURE;
  payload: GetSkillFailurePayload;
};

// *****************ADD******************
export interface AddSkillPayload {
  values: ISkillModel;
  callback: any;
}
export interface AddSkillSuccessPayload {
  data: ISkillModel;
  message: string;
}
export interface AddSkillFailurePayload {
  error: string;
}

export interface AddSkillRequest {
  type: typeof ADD_SKILL_REQUEST;
  payload: AddSkillPayload;
}
export type AddSkillSuccess = {
  type: typeof ADD_SKILL_SUCCESS;
  payload: AddSkillSuccessPayload;
};
export type AddSkillFailure = {
  type: typeof ADD_SKILL_FAILURE;
  payload: AddSkillFailurePayload;
};

// *****************EDIT******************
export interface EditSkillPayload {
  values: ISkillModel;
  callback: any;
}
export interface EditSkillSuccessPayload {
  data: ISkillModel;
  message: string;
}
export interface EditSkillFailurePayload {
  error: string;
}

export interface EditSkillRequest {
  type: typeof EDIT_SKILL_REQUEST;
  payload: EditSkillPayload;
}
export type EditSkillSuccess = {
  type: typeof EDIT_SKILL_SUCCESS;
  payload: EditSkillSuccessPayload;
};
export type EditSkillFailure = {
  type: typeof EDIT_SKILL_FAILURE;
  payload: EditSkillFailurePayload;
};

// *****************DELETE******************
export interface DeleteSkillPayload {
  values: { skillId: string | number };
  callback: any;
}
export interface DeleteSkillSuccessPayload {
  data: { message: string };
  message: string;
}
export interface DeleteSkillFailurePayload {
  error: string;
}

export interface DeleteSkillRequest {
  type: typeof DELETE_SKILL_REQUEST;
  payload: DeleteSkillPayload;
}
export type DeleteSkillSuccess = {
  type: typeof DELETE_SKILL_SUCCESS;
  payload: DeleteSkillSuccessPayload;
};
export type DeleteSkillFailure = {
  type: typeof DELETE_SKILL_FAILURE;
  payload: DeleteSkillFailurePayload;
};

// *****************GET BY ID******************
export interface GetSkillByIdPayload {
  values: { skillId: string | number };
  callback: any;
}
export interface GetSkillByIdSuccessPayload {
  data: ISkillModel;
  message: string;
}
export interface GetSkillByIdFailurePayload {
  error: string;
}

export interface GetSkillByIdRequest {
  type: typeof GET_SKILL_BY_ID_REQUEST;
  payload: GetSkillByIdPayload;
}
export type GetSkillByIdSuccess = {
  type: typeof GET_SKILL_BY_ID_SUCCESS;
  payload: GetSkillByIdSuccessPayload;
};
export type GetSkillByIdFailure = {
  type: typeof GET_SKILL_BY_ID_FAILURE;
  payload: GetSkillByIdFailurePayload;
};

// *****************FIND BY KEYWORD******************
export interface FindSkillByKeywordPayload {
  values: { keyword: string | number };
  callback: any;
}
export interface FindSkillByKeywordSuccessPayload {
  data: Array<ISkillModel>;
  message: string;
}
export interface FindSkillByKeywordFailurePayload {
  error: string;
}

export interface FindSkillByKeywordRequest {
  type: typeof FIND_SKILL_BY_KEYWORD_REQUEST;
  payload: FindSkillByKeywordPayload;
}
export type FindSkillByKeywordSuccess = {
  type: typeof FIND_SKILL_BY_KEYWORD_SUCCESS;
  payload: FindSkillByKeywordSuccessPayload;
};
export type FindSkillByKeywordFailure = {
  type: typeof FIND_SKILL_BY_KEYWORD_FAILURE;
  payload: FindSkillByKeywordFailurePayload;
};

export type SkillActions =
  | GetSkillRequest
  | GetSkillSuccess
  | GetSkillFailure
  | AddSkillRequest
  | AddSkillSuccess
  | AddSkillFailure
  | EditSkillRequest
  | EditSkillSuccess
  | EditSkillFailure
  | DeleteSkillRequest
  | DeleteSkillSuccess
  | DeleteSkillFailure
  | GetSkillByIdRequest
  | GetSkillByIdSuccess
  | GetSkillByIdFailure
  | FindSkillByKeywordRequest
  | FindSkillByKeywordSuccess
  | FindSkillByKeywordFailure;
