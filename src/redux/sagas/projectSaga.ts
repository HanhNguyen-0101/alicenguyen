import { all, call, put, takeLatest } from "redux-saga/effects";
import { callback, callbackObj } from "../../components/global/Global";
import {
  NOTIF_TYPE,
  openNotification,
} from "../../components/notification/notification";
import { STATUS_CODE } from "../../utils/config/configSetting";
import { hideDrawer } from "../actions/drawer.action";
import {
  addProjectFailure,
  addProjectSuccess,
  deleteProjectFailure,
  deleteProjectSuccess,
  editProjectFailure,
  editProjectSuccess,
  findProjectByKeywordFailure,
  findProjectByKeywordSuccess,
  getProjectByIdFailure,
  getProjectByIdSuccess,
  getProjectFailure,
  getProjectRequest,
  getProjectSuccess,
} from "../actions/project.action";
import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loading.actionTypes";
import {
  ADD_PROJECT_REQUEST,
  DELETE_PROJECT_REQUEST,
  EDIT_PROJECT_REQUEST,
  FIND_PROJECT_BY_KEYWORD_REQUEST,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_REQUEST,
} from "../actionTypes/project.actionTypes";
import { ProjectService } from "../services/projectService";
import { IProjectResponse } from "../types/project.type";

function* getProjectSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IProjectResponse = yield call(ProjectService.get);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getProjectSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getProjectFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* addProjectSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IProjectResponse = yield call(ProjectService.add, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.CREATE) {
      yield put(addProjectSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Add project", data.message);
    }
    yield put(
      getProjectRequest(
        callbackObj(null, callback("Inside callback after get all project"))
      )
    );
  } catch (e: any) {
    yield put(
      addProjectFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Add project", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* editProjectSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IProjectResponse = yield call(ProjectService.edit, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editProjectSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Edit project", data.message);
    }
    yield put(
      getProjectRequest(
        callbackObj(null, callback("Inside callback after get all project"))
      )
    );
  } catch (e: any) {
    yield put(
      editProjectFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Edit project", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* deleteProjectSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IProjectResponse = yield call(
      ProjectService.delete,
      action.payload.values.projectId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteProjectSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, data.message, data.data.message);
    }
    yield put(
      getProjectRequest(
        callbackObj(null, callback("Inside callback after get all project"))
      )
    );
  } catch (e: any) {
    yield put(
      deleteProjectFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Delete project", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* getProjectByIdSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IProjectResponse = yield call(
      ProjectService.getById,
      action.payload.values.projectId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getProjectByIdSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getProjectByIdFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* findProjectByKeywordSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IProjectResponse = yield call(
      ProjectService.findByKeyword,
      action.payload.values.keyword
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(findProjectByKeywordSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      findProjectByKeywordFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}

function* projectSaga() {
  yield all([takeLatest(GET_PROJECT_REQUEST, getProjectSaga)]);
  yield all([takeLatest(ADD_PROJECT_REQUEST, addProjectSaga)]);
  yield all([takeLatest(EDIT_PROJECT_REQUEST, editProjectSaga)]);
  yield all([takeLatest(DELETE_PROJECT_REQUEST, deleteProjectSaga)]);
  yield all([takeLatest(GET_PROJECT_BY_ID_REQUEST, getProjectByIdSaga)]);
  yield all([
    takeLatest(FIND_PROJECT_BY_KEYWORD_REQUEST, findProjectByKeywordSaga),
  ]);
}

export default projectSaga;
