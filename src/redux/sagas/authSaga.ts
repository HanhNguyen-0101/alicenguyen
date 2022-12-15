import { all, call, put, takeLatest } from "redux-saga/effects";
import { callback, callbackObj } from "../../components/global/Global";
import {
  NOTIF_TYPE,
  openNotification,
} from "../../components/notification/notification";
import { STATUS_CODE } from "../../utils/config/configSetting";
import { history } from "../../utils/history/history";
import {
  loginFailure,
  loginSuccess,
  signupSuccess,
  signupFailure,
  addAuthFailure,
  addAuthSuccess,
  deleteAuthFailure,
  deleteAuthSuccess,
  editAuthFailure,
  editAuthSuccess,
  findAuthByKeywordFailure,
  findAuthByKeywordSuccess,
  getAuthByIdFailure,
  getAuthByIdSuccess,
  getAuthFailure,
  getAuthSuccess,
  getAuthRequest,
  requestResetPasswordSuccess,
  requestResetPasswordFailure,
  updateProfileSuccess,
  updateProfileFailure,
  updateAvatarSuccess,
  updateAvatarFailure,
  resetPasswordSuccess,
} from "../actions/auth.action";
import { hideDrawer } from "../actions/drawer.action";
import {
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  ADD_AUTH_REQUEST,
  DELETE_AUTH_REQUEST,
  EDIT_AUTH_REQUEST,
  FIND_AUTH_BY_KEYWORD_REQUEST,
  GET_AUTH_BY_ID_REQUEST,
  GET_AUTH_REQUEST,
  REQUEST_RESET_PASSWORD_REQUEST,
  UPDATE_AVATAR_REQUEST,
  UPDATE_PROFILE_REQUEST,
  RESET_PASSWORD_REQUEST,
} from "../actionTypes/auth.actionTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loading.actionTypes";
import { AuthService } from "../services/authService";
import { IAuthResponse } from "../types/auth.type";

function* signupSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(AuthService.signup, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    });
    if (status === STATUS_CODE.CREATE) {
      yield put(signupSuccess(data));
      action.payload.callback(data);
      yield history.push("/admin/dashboard");
      yield window.location.reload();
    }
  } catch (e: any) {
    yield put(
      signupFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Sign up", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* loginSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(AuthService.login, {
      email: action.payload.values.email,
      password: action.payload.values.password,
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put(loginSuccess(data));
      action.payload.callback(data);
      yield history.push("/admin/dashboard");
      yield window.location.reload();
    }
  } catch (e: any) {
    yield put(
      loginFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Sign in", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* requestResetPasswordSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(
      AuthService.requestResetPassword,
      {
        email: action.payload.values.email,
      }
    );
    const user: IAuthResponse = yield call(AuthService.getById, data.data.id);
    if (status === STATUS_CODE.SUCCESS && user.status === STATUS_CODE.SUCCESS) {
      yield put(requestResetPasswordSuccess(user.data));
      action.payload.callback(user.data);
      openNotification(NOTIF_TYPE.SUCCESS, "Reset password", data.message);
    }
  } catch (e: any) {
    yield put(
      requestResetPasswordFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Reset password", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* updateProfileSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(
      AuthService.updateProfile,
      {
        ...action.payload.values,
      }
    );
    const user: IAuthResponse = yield call(AuthService.getById, data.data.id);
    if (status === STATUS_CODE.SUCCESS && user.status === STATUS_CODE.SUCCESS) {
      yield put(updateProfileSuccess(user.data));
      action.payload.callback(user.data);
      openNotification(NOTIF_TYPE.SUCCESS, "Update profile", data.message);
    }
  } catch (e: any) {
    yield put(
      updateProfileFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Update profile", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* updateAvatarSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(
      AuthService.updateAvatar,
      {
        src: action.payload.values.file,
        id: action.payload.values.id,
      }
    );
    const user: IAuthResponse = yield call(AuthService.getById, data.data.id);
    if (status === STATUS_CODE.SUCCESS && user.status === STATUS_CODE.SUCCESS) {
      yield put(updateAvatarSuccess(user.data));
      action.payload.callback(user.data);
      openNotification(NOTIF_TYPE.SUCCESS, "Update avatar", data.message);
    }
  } catch (e: any) {
    yield put(
      updateAvatarFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Update avatar", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* getAuthSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(AuthService.get);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getAuthSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getAuthFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* addAuthSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(AuthService.add, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.CREATE) {
      yield put(addAuthSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Add auth", data.message);
    }
    yield put(
      getAuthRequest(
        callbackObj(null, callback("Inside callback after get all auth"))
      )
    );
  } catch (e: any) {
    yield put(
      addAuthFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Add auth", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* editAuthSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(AuthService.edit, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editAuthSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Edit auth", data.message);
    }
    yield put(
      getAuthRequest(
        callbackObj(null, callback("Inside callback after get all auth"))
      )
    );
  } catch (e: any) {
    yield put(
      editAuthFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Edit auth", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* deleteAuthSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(
      AuthService.delete,
      action.payload.values.authId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteAuthSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, data.message, data.data.message);
    }
    yield put(
      getAuthRequest(
        callbackObj(null, callback("Inside callback after get all auth"))
      )
    );
  } catch (e: any) {
    yield put(
      deleteAuthFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Delete auth", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* getAuthByIdSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(
      AuthService.getById,
      action.payload.values.authId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getAuthByIdSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getAuthByIdFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* findAuthByKeywordSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(
      AuthService.findByKeyword,
      action.payload.values.keyword
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(findAuthByKeywordSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      findAuthByKeywordFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* resetPasswordAuthSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IAuthResponse = yield call(
      AuthService.resetPassword,
      {
        id: action.payload.values.id,
        password: action.payload.values.password,
        resetPasswordStatus: action.payload.values.resetPasswordStatus,
      }
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(resetPasswordSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Reset password auth", data.message);
    }
    yield put(
      getAuthRequest(
        callbackObj(null, callback("Inside callback after get all auth"))
      )
    );
  } catch (e: any) {
    yield put(
      addAuthFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Add auth", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* authSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
  yield all([takeLatest(SIGNUP_REQUEST, signupSaga)]);
  yield all([
    takeLatest(REQUEST_RESET_PASSWORD_REQUEST, requestResetPasswordSaga),
  ]);
  yield all([takeLatest(UPDATE_AVATAR_REQUEST, updateAvatarSaga)]);
  yield all([takeLatest(UPDATE_PROFILE_REQUEST, updateProfileSaga)]);

  yield all([takeLatest(GET_AUTH_REQUEST, getAuthSaga)]);
  yield all([takeLatest(ADD_AUTH_REQUEST, addAuthSaga)]);
  yield all([takeLatest(EDIT_AUTH_REQUEST, editAuthSaga)]);
  yield all([takeLatest(DELETE_AUTH_REQUEST, deleteAuthSaga)]);
  yield all([takeLatest(GET_AUTH_BY_ID_REQUEST, getAuthByIdSaga)]);
  yield all([takeLatest(FIND_AUTH_BY_KEYWORD_REQUEST, findAuthByKeywordSaga)]);
  yield all([takeLatest(RESET_PASSWORD_REQUEST, resetPasswordAuthSaga)]);
}

export default authSaga;
