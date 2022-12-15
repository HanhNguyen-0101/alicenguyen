import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
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
import {
  LoginPayload,
  SignupPayload,
  LoginRequest,
  LoginSuccess,
  LoginSuccessPayload,
  LoginFailure,
  LoginFailurePayload,
  SignupRequest,
  SignupSuccess,
  SignupSuccessPayload,
  SignupFailure,
  SignupFailurePayload,
  AddAuthFailure,
  AddAuthFailurePayload,
  AddAuthPayload,
  AddAuthRequest,
  AddAuthSuccess,
  AddAuthSuccessPayload,
  DeleteAuthFailure,
  DeleteAuthFailurePayload,
  DeleteAuthPayload,
  DeleteAuthRequest,
  DeleteAuthSuccess,
  DeleteAuthSuccessPayload,
  EditAuthFailure,
  EditAuthFailurePayload,
  EditAuthPayload,
  EditAuthRequest,
  EditAuthSuccess,
  EditAuthSuccessPayload,
  FindAuthByKeywordFailure,
  FindAuthByKeywordFailurePayload,
  FindAuthByKeywordPayload,
  FindAuthByKeywordRequest,
  FindAuthByKeywordSuccess,
  FindAuthByKeywordSuccessPayload,
  GetAuthByIdFailure,
  GetAuthByIdFailurePayload,
  GetAuthByIdPayload,
  GetAuthByIdRequest,
  GetAuthByIdSuccess,
  GetAuthByIdSuccessPayload,
  GetAuthFailure,
  GetAuthFailurePayload,
  GetAuthPayload,
  GetAuthRequest,
  GetAuthSuccess,
  GetAuthSuccessPayload,
  RequestResetPasswordPayload,
  RequestResetPasswordRequest,
  RequestResetPasswordSuccessPayload,
  RequestResetPasswordSuccess,
  RequestResetPasswordFailurePayload,
  RequestResetPasswordFailure,
  UpdateProfilePayload,
  UpdateProfileRequest,
  UpdateProfileSuccessPayload,
  UpdateProfileSuccess,
  UpdateProfileFailurePayload,
  UpdateProfileFailure,
  UpdateAvatarPayload,
  UpdateAvatarRequest,
  UpdateAvatarSuccessPayload,
  UpdateAvatarSuccess,
  UpdateAvatarFailurePayload,
  UpdateAvatarFailure,
  LogOutSuccess,
  ResetPasswordPayload,
  ResetPasswordRequest,
  ResetPasswordSuccessPayload,
  ResetPasswordSuccess,
  ResetPasswordFailurePayload,
  ResetPasswordFailure,
} from "./../types/auth.type";

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  type: LOGIN_FAILURE,
  payload,
});

// *******************Request Reset Password*******************
export const requestResetPasswordRequest = (
  payload: RequestResetPasswordPayload
): RequestResetPasswordRequest => ({
  type: REQUEST_RESET_PASSWORD_REQUEST,
  payload,
});

export const requestResetPasswordSuccess = (
  payload: RequestResetPasswordSuccessPayload
): RequestResetPasswordSuccess => ({
  type: REQUEST_RESET_PASSWORD_SUCCESS,
  payload,
});

export const requestResetPasswordFailure = (
  payload: RequestResetPasswordFailurePayload
): RequestResetPasswordFailure => ({
  type: REQUEST_RESET_PASSWORD_FAILURE,
  payload,
});

// *******************Sign up*******************
export const signupRequest = (payload: SignupPayload): SignupRequest => ({
  type: SIGNUP_REQUEST,
  payload,
});

export const signupSuccess = (
  payload: SignupSuccessPayload
): SignupSuccess => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupFailure = (
  payload: SignupFailurePayload
): SignupFailure => ({
  type: SIGNUP_FAILURE,
  payload,
});

export const signOut = (): LogOutSuccess => ({
  type: LOGOUT
})

// *******************update profile*******************
export const updateProfileRequest = (
  payload: UpdateProfilePayload
): UpdateProfileRequest => ({
  type: UPDATE_PROFILE_REQUEST,
  payload,
});

export const updateProfileSuccess = (
  payload: UpdateProfileSuccessPayload
): UpdateProfileSuccess => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload,
});

export const updateProfileFailure = (
  payload: UpdateProfileFailurePayload
): UpdateProfileFailure => ({
  type: UPDATE_PROFILE_FAILURE,
  payload,
});

// *******************update avatar*******************
export const updateAvatarRequest = (
  payload: UpdateAvatarPayload
): UpdateAvatarRequest => ({
  type: UPDATE_AVATAR_REQUEST,
  payload,
});

export const updateAvatarSuccess = (
  payload: UpdateAvatarSuccessPayload
): UpdateAvatarSuccess => ({
  type: UPDATE_AVATAR_SUCCESS,
  payload,
});

export const updateAvatarFailure = (
  payload: UpdateAvatarFailurePayload
): UpdateAvatarFailure => ({
  type: UPDATE_AVATAR_FAILURE,
  payload,
});

// *****************GET ALL******************
export const getAuthRequest = (payload: GetAuthPayload): GetAuthRequest => ({
  type: GET_AUTH_REQUEST,
  payload,
});
export const getAuthSuccess = (
  payload: GetAuthSuccessPayload
): GetAuthSuccess => ({
  type: GET_AUTH_SUCCESS,
  payload,
});
export const getAuthFailure = (
  payload: GetAuthFailurePayload
): GetAuthFailure => ({
  type: GET_AUTH_FAILURE,
  payload,
});

// *****************ADD******************
export const addAuthRequest = (payload: AddAuthPayload): AddAuthRequest => ({
  type: ADD_AUTH_REQUEST,
  payload,
});
export const addAuthSuccess = (
  payload: AddAuthSuccessPayload
): AddAuthSuccess => ({
  type: ADD_AUTH_SUCCESS,
  payload,
});
export const addAuthFailure = (
  payload: AddAuthFailurePayload
): AddAuthFailure => ({
  type: ADD_AUTH_FAILURE,
  payload,
});

// *****************EDIT******************
export const editAuthRequest = (payload: EditAuthPayload): EditAuthRequest => ({
  type: EDIT_AUTH_REQUEST,
  payload,
});
export const editAuthSuccess = (
  payload: EditAuthSuccessPayload
): EditAuthSuccess => ({
  type: EDIT_AUTH_SUCCESS,
  payload,
});
export const editAuthFailure = (
  payload: EditAuthFailurePayload
): EditAuthFailure => ({
  type: EDIT_AUTH_FAILURE,
  payload,
});

// *****************DELETE******************
export const deleteAuthRequest = (
  payload: DeleteAuthPayload
): DeleteAuthRequest => ({
  type: DELETE_AUTH_REQUEST,
  payload,
});
export const deleteAuthSuccess = (
  payload: DeleteAuthSuccessPayload
): DeleteAuthSuccess => ({
  type: DELETE_AUTH_SUCCESS,
  payload,
});
export const deleteAuthFailure = (
  payload: DeleteAuthFailurePayload
): DeleteAuthFailure => ({
  type: DELETE_AUTH_FAILURE,
  payload,
});

// *****************GET BY ID******************
export const getAuthByIdRequest = (
  payload: GetAuthByIdPayload
): GetAuthByIdRequest => ({
  type: GET_AUTH_BY_ID_REQUEST,
  payload,
});
export const getAuthByIdSuccess = (
  payload: GetAuthByIdSuccessPayload
): GetAuthByIdSuccess => ({
  type: GET_AUTH_BY_ID_SUCCESS,
  payload,
});
export const getAuthByIdFailure = (
  payload: GetAuthByIdFailurePayload
): GetAuthByIdFailure => ({
  type: GET_AUTH_BY_ID_FAILURE,
  payload,
});

// *****************FIND BY KEYWORD******************
export const findAuthByKeywordRequest = (
  payload: FindAuthByKeywordPayload
): FindAuthByKeywordRequest => ({
  type: FIND_AUTH_BY_KEYWORD_REQUEST,
  payload,
});
export const findAuthByKeywordSuccess = (
  payload: FindAuthByKeywordSuccessPayload
): FindAuthByKeywordSuccess => ({
  type: FIND_AUTH_BY_KEYWORD_SUCCESS,
  payload,
});
export const findAuthByKeywordFailure = (
  payload: FindAuthByKeywordFailurePayload
): FindAuthByKeywordFailure => ({
  type: FIND_AUTH_BY_KEYWORD_FAILURE,
  payload,
});


// *******************Reset Password*******************
export const resetPasswordRequest = (
  payload: ResetPasswordPayload
): ResetPasswordRequest => ({
  type: RESET_PASSWORD_REQUEST,
  payload,
});

export const resetPasswordSuccess = (
  payload: ResetPasswordSuccessPayload
): ResetPasswordSuccess => ({
  type: RESET_PASSWORD_SUCCESS,
  payload,
});

export const resetPasswordFailure = (
  payload: ResetPasswordFailurePayload
): ResetPasswordFailure => ({
  type: RESET_PASSWORD_FAILURE,
  payload,
});
