import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  ADD_AUTH_FAILURE,
  ADD_AUTH_REQUEST,
  ADD_AUTH_SUCCESS,
  DELETE_AUTH_FAILURE,
  DELETE_AUTH_REQUEST,
  DELETE_AUTH_SUCCESS,
  EDIT_AUTH_FAILURE,
  EDIT_AUTH_REQUEST,
  EDIT_AUTH_SUCCESS,
  FIND_AUTH_BY_KEYWORD_FAILURE,
  FIND_AUTH_BY_KEYWORD_REQUEST,
  FIND_AUTH_BY_KEYWORD_SUCCESS,
  GET_AUTH_BY_ID_FAILURE,
  GET_AUTH_BY_ID_REQUEST,
  GET_AUTH_BY_ID_SUCCESS,
  GET_AUTH_FAILURE,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  REQUEST_RESET_PASSWORD_REQUEST,
  REQUEST_RESET_PASSWORD_SUCCESS,
  REQUEST_RESET_PASSWORD_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE,
  LOGOUT,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "./../actionTypes/auth.actionTypes";
import { IMediaModel } from "./media.type";
import { ISubCategoryModel } from "./subCategory.type";

export interface IAuth {
  token: string;
}
export interface IAuthModel {
  id: string;
  email: string;
  password: string;
  avatar: string;
  status: number;
  resetPasswordStatus: number;
  statusObj: ISubCategoryModel;
  avatarObj: IMediaModel;
  resetPasswordStatusObj: ISubCategoryModel;
}
export interface IAuthArrayModel {
  data: Array<IAuthModel>;
}
export interface IAuthResponse {
  data: { data: any; message: string };
  status: number;
}
export interface AuthState {
  authLogin: string;
  pending: boolean;
  token: string;
  error: string | null;
  authArr: Array<IAuthModel>;
  auth: IAuthModel | null;
  deleteMsg: string | null;
}

export interface LoginPayload {
  values: { email: string; password: string };
  callback: any;
}

export interface LoginSuccessPayload {
  data: {
    token: string;
    user: IAuthModel;
  };
  message: string;
}

export interface LoginFailurePayload {
  error: string;
}

export interface UpdateProfilePayload {
  values: { email: string; password: string };
  callback: any;
}

export interface UpdateProfileSuccessPayload {
  data: IAuthModel;
  message: string;
}

export interface UpdateProfileFailurePayload {
  error: string;
}

export interface UpdateAvatarPayload {
  values: { avatar: any };
  callback: any;
}

export interface UpdateAvatarSuccessPayload {
  data: IAuthModel;
  message: string;
}

export interface UpdateAvatarFailurePayload {
  error: string;
}
export interface SignupSuccessPayload {
  data: IAuthModel;
  message: string;
}

export interface SignupFailurePayload {
  error: string;
}

export interface RequestResetPasswordPayload {
  values: { email: string };
  callback: any;
}

export interface RequestResetPasswordSuccessPayload {
  data: IAuthModel;
  message: string;
}

export interface RequestResetPasswordFailurePayload {
  error: string;
}
export type LogOutSuccess = {
  type: typeof LOGOUT;
};
export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
}

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
};

export type LoginFailure = {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
};

export interface UpdateProfileRequest {
  type: typeof UPDATE_PROFILE_REQUEST;
  payload: UpdateProfilePayload;
}

export type UpdateProfileSuccess = {
  type: typeof UPDATE_PROFILE_SUCCESS;
  payload: UpdateProfileSuccessPayload;
};

export type UpdateProfileFailure = {
  type: typeof UPDATE_PROFILE_FAILURE;
  payload: UpdateProfileFailurePayload;
};

export interface UpdateAvatarRequest {
  type: typeof UPDATE_AVATAR_REQUEST;
  payload: UpdateAvatarPayload;
}

export type UpdateAvatarSuccess = {
  type: typeof UPDATE_AVATAR_SUCCESS;
  payload: UpdateAvatarSuccessPayload;
};

export type UpdateAvatarFailure = {
  type: typeof UPDATE_AVATAR_FAILURE;
  payload: UpdateAvatarFailurePayload;
};

export interface SignupPayload {
  values: { email: string; password: string; avatar: string };
  callback: any;
}

export interface SignupRequest {
  type: typeof SIGNUP_REQUEST;
  payload: SignupPayload;
}

export type SignupSuccess = {
  type: typeof SIGNUP_SUCCESS;
  payload: SignupSuccessPayload;
};

export type SignupFailure = {
  type: typeof SIGNUP_FAILURE;
  payload: SignupFailurePayload;
};

export interface RequestResetPasswordRequest {
  type: typeof REQUEST_RESET_PASSWORD_REQUEST;
  payload: RequestResetPasswordPayload;
}

export type RequestResetPasswordSuccess = {
  type: typeof REQUEST_RESET_PASSWORD_SUCCESS;
  payload: RequestResetPasswordSuccessPayload;
};

export type RequestResetPasswordFailure = {
  type: typeof REQUEST_RESET_PASSWORD_FAILURE;
  payload: RequestResetPasswordFailurePayload;
};
// *****************RESET PASSWORD******************
export interface ResetPasswordPayload {
  values: { id: number; password: string; resetPasswordStatus: number };
  callback: any;
}
export interface ResetPasswordSuccessPayload {
  data: IAuthModel;
  message: string;
}
export interface ResetPasswordFailurePayload {
  error: string;
}
export interface ResetPasswordRequest {
  type: typeof RESET_PASSWORD_REQUEST;
  payload: ResetPasswordPayload;
}
export type ResetPasswordSuccess = {
  type: typeof RESET_PASSWORD_SUCCESS;
  payload: ResetPasswordSuccessPayload;
};
export type ResetPasswordFailure = {
  type: typeof RESET_PASSWORD_FAILURE;
  payload: ResetPasswordFailurePayload;
};

// *****************GET ALL******************
export interface GetAuthPayload {
  callback: any;
}
export interface GetAuthSuccessPayload {
  data: Array<IAuthModel>;
  message: string;
}
export interface GetAuthFailurePayload {
  error: string;
}

export interface GetAuthRequest {
  type: typeof GET_AUTH_REQUEST;
  payload: GetAuthPayload;
}
export type GetAuthSuccess = {
  type: typeof GET_AUTH_SUCCESS;
  payload: GetAuthSuccessPayload;
};
export type GetAuthFailure = {
  type: typeof GET_AUTH_FAILURE;
  payload: GetAuthFailurePayload;
};

// *****************ADD******************
export interface AddAuthPayload {
  values: IAuthModel;
  callback: any;
}
export interface AddAuthSuccessPayload {
  data: IAuthModel;
  message: string;
}
export interface AddAuthFailurePayload {
  error: string;
}

export interface AddAuthRequest {
  type: typeof ADD_AUTH_REQUEST;
  payload: AddAuthPayload;
}
export type AddAuthSuccess = {
  type: typeof ADD_AUTH_SUCCESS;
  payload: AddAuthSuccessPayload;
};
export type AddAuthFailure = {
  type: typeof ADD_AUTH_FAILURE;
  payload: AddAuthFailurePayload;
};

// *****************EDIT******************
export interface EditAuthPayload {
  values: IAuthModel;
  callback: any;
}
export interface EditAuthSuccessPayload {
  data: IAuthModel;
  message: string;
}
export interface EditAuthFailurePayload {
  error: string;
}

export interface EditAuthRequest {
  type: typeof EDIT_AUTH_REQUEST;
  payload: EditAuthPayload;
}
export type EditAuthSuccess = {
  type: typeof EDIT_AUTH_SUCCESS;
  payload: EditAuthSuccessPayload;
};
export type EditAuthFailure = {
  type: typeof EDIT_AUTH_FAILURE;
  payload: EditAuthFailurePayload;
};

// *****************DELETE******************
export interface DeleteAuthPayload {
  values: { authId: string | number };
  callback: any;
}
export interface DeleteAuthSuccessPayload {
  data: { message: string };
  message: string;
}
export interface DeleteAuthFailurePayload {
  error: string;
}

export interface DeleteAuthRequest {
  type: typeof DELETE_AUTH_REQUEST;
  payload: DeleteAuthPayload;
}
export type DeleteAuthSuccess = {
  type: typeof DELETE_AUTH_SUCCESS;
  payload: DeleteAuthSuccessPayload;
};
export type DeleteAuthFailure = {
  type: typeof DELETE_AUTH_FAILURE;
  payload: DeleteAuthFailurePayload;
};

// *****************GET BY ID******************
export interface GetAuthByIdPayload {
  values: { authId: string | number };
  callback: any;
}
export interface GetAuthByIdSuccessPayload {
  data: IAuthModel;
  message: string;
}
export interface GetAuthByIdFailurePayload {
  error: string;
}

export interface GetAuthByIdRequest {
  type: typeof GET_AUTH_BY_ID_REQUEST;
  payload: GetAuthByIdPayload;
}
export type GetAuthByIdSuccess = {
  type: typeof GET_AUTH_BY_ID_SUCCESS;
  payload: GetAuthByIdSuccessPayload;
};
export type GetAuthByIdFailure = {
  type: typeof GET_AUTH_BY_ID_FAILURE;
  payload: GetAuthByIdFailurePayload;
};

// *****************FIND BY KEYWORD******************
export interface FindAuthByKeywordPayload {
  values: { keyword: string | number };
  callback: any;
}
export interface FindAuthByKeywordSuccessPayload {
  data: Array<IAuthModel>;
  message: string;
}
export interface FindAuthByKeywordFailurePayload {
  error: string;
}

export interface FindAuthByKeywordRequest {
  type: typeof FIND_AUTH_BY_KEYWORD_REQUEST;
  payload: FindAuthByKeywordPayload;
}
export type FindAuthByKeywordSuccess = {
  type: typeof FIND_AUTH_BY_KEYWORD_SUCCESS;
  payload: FindAuthByKeywordSuccessPayload;
};
export type FindAuthByKeywordFailure = {
  type: typeof FIND_AUTH_BY_KEYWORD_FAILURE;
  payload: FindAuthByKeywordFailurePayload;
};

export type AuthActions =
  | LogOutSuccess
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | SignupFailure
  | SignupSuccess
  | SignupRequest
  | RequestResetPasswordFailure
  | RequestResetPasswordSuccess
  | RequestResetPasswordRequest
  | UpdateProfileFailure
  | UpdateProfileSuccess
  | UpdateProfileRequest
  | UpdateAvatarFailure
  | UpdateAvatarSuccess
  | UpdateAvatarRequest
  | GetAuthRequest
  | GetAuthSuccess
  | GetAuthFailure
  | AddAuthRequest
  | AddAuthSuccess
  | AddAuthFailure
  | EditAuthRequest
  | EditAuthSuccess
  | EditAuthFailure
  | DeleteAuthRequest
  | DeleteAuthSuccess
  | DeleteAuthFailure
  | GetAuthByIdRequest
  | GetAuthByIdSuccess
  | GetAuthByIdFailure
  | FindAuthByKeywordRequest
  | FindAuthByKeywordSuccess
  | FindAuthByKeywordFailure;
