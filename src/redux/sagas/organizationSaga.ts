import { all, call, put, takeLatest } from "redux-saga/effects";
import { callback, callbackObj } from "../../components/global/Global";
import {
  NOTIF_TYPE,
  openNotification,
} from "../../components/notification/notification";
import { STATUS_CODE } from "../../utils/config/configSetting";
import { hideDrawer } from "../actions/drawer.action";
import {
  addOrganizationFailure,
  addOrganizationSuccess,
  deleteOrganizationFailure,
  deleteOrganizationSuccess,
  editOrganizationFailure,
  editOrganizationSuccess,
  findOrganizationByKeywordFailure,
  findOrganizationByKeywordSuccess,
  getOrganizationByIdFailure,
  getOrganizationByIdSuccess,
  getOrganizationFailure,
  getOrganizationRequest,
  getOrganizationSuccess,
} from "../actions/organization.action";
import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loading.actionTypes";
import {
  ADD_ORGANIZATION_REQUEST,
  DELETE_ORGANIZATION_REQUEST,
  EDIT_ORGANIZATION_REQUEST,
  FIND_ORGANIZATION_BY_KEYWORD_REQUEST,
  GET_ORGANIZATION_BY_ID_REQUEST,
  GET_ORGANIZATION_REQUEST,
} from "../actionTypes/organization.actionTypes";
import { OrganizationService } from "../services/organizationService";
import { IOrganizationResponse } from "../types/organization.type";

function* getOrganizationSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IOrganizationResponse = yield call(
      OrganizationService.get
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getOrganizationSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getOrganizationFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* addOrganizationSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IOrganizationResponse = yield call(
      OrganizationService.add,
      {
        ...action.payload.values,
      }
    );
    if (status === STATUS_CODE.CREATE) {
      yield put(addOrganizationSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Add organization", data.message);
    }
    yield put(
      getOrganizationRequest(
        callbackObj(
          null,
          callback("Inside callback after get all organization")
        )
      )
    );
  } catch (e: any) {
    yield put(
      addOrganizationFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Add organization", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* editOrganizationSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IOrganizationResponse = yield call(
      OrganizationService.edit,
      {
        ...action.payload.values,
      }
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editOrganizationSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Edit organization", data.message);
    }
    yield put(
      getOrganizationRequest(
        callbackObj(
          null,
          callback("Inside callback after get all organization")
        )
      )
    );
  } catch (e: any) {
    yield put(
      editOrganizationFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Edit organization", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* deleteOrganizationSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IOrganizationResponse = yield call(
      OrganizationService.delete,
      action.payload.values.organizationId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteOrganizationSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, data.message, data.data.message);
    }
    yield put(
      getOrganizationRequest(
        callbackObj(
          null,
          callback("Inside callback after get all organization")
        )
      )
    );
  } catch (e: any) {
    yield put(
      deleteOrganizationFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Delete organization", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* getOrganizationByIdSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IOrganizationResponse = yield call(
      OrganizationService.getById,
      action.payload.values.organizationId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getOrganizationByIdSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getOrganizationByIdFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* findOrganizationByKeywordSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IOrganizationResponse = yield call(
      OrganizationService.findByKeyword,
      action.payload.values.keyword
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(findOrganizationByKeywordSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      findOrganizationByKeywordFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}

function* organizationSaga() {
  yield all([takeLatest(GET_ORGANIZATION_REQUEST, getOrganizationSaga)]);
  yield all([takeLatest(ADD_ORGANIZATION_REQUEST, addOrganizationSaga)]);
  yield all([takeLatest(EDIT_ORGANIZATION_REQUEST, editOrganizationSaga)]);
  yield all([takeLatest(DELETE_ORGANIZATION_REQUEST, deleteOrganizationSaga)]);
  yield all([
    takeLatest(GET_ORGANIZATION_BY_ID_REQUEST, getOrganizationByIdSaga),
  ]);
  yield all([
    takeLatest(
      FIND_ORGANIZATION_BY_KEYWORD_REQUEST,
      findOrganizationByKeywordSaga
    ),
  ]);
}

export default organizationSaga;
