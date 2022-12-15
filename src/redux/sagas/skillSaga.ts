import { all, call, put, takeLatest } from "redux-saga/effects";
import { callback, callbackObj } from "../../components/global/Global";
import {
  NOTIF_TYPE,
  openNotification,
} from "../../components/notification/notification";
import { STATUS_CODE } from "../../utils/config/configSetting";
import { hideDrawer } from "../actions/drawer.action";
import {
  addSkillFailure,
  addSkillSuccess,
  deleteSkillFailure,
  deleteSkillSuccess,
  editSkillFailure,
  editSkillSuccess,
  findSkillByKeywordFailure,
  findSkillByKeywordSuccess,
  getSkillByIdFailure,
  getSkillByIdSuccess,
  getSkillFailure,
  getSkillRequest,
  getSkillSuccess,
} from "../actions/skill.action";
import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loading.actionTypes";
import {
  ADD_SKILL_REQUEST,
  DELETE_SKILL_REQUEST,
  EDIT_SKILL_REQUEST,
  FIND_SKILL_BY_KEYWORD_REQUEST,
  GET_SKILL_BY_ID_REQUEST,
  GET_SKILL_REQUEST,
} from "../actionTypes/skill.actionTypes";
import { SkillService } from "../services/skillService";
import { ISkillResponse } from "../types/skill.type";

function* getSkillSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISkillResponse = yield call(SkillService.get);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getSkillSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getSkillFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* addSkillSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISkillResponse = yield call(SkillService.add, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.CREATE) {
      yield put(addSkillSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Add skill", data.message);
    }
    yield put(
      getSkillRequest(
        callbackObj(null, callback("Inside callback after get all skill"))
      )
    );
  } catch (e: any) {
    yield put(
      addSkillFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Add skill", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* editSkillSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISkillResponse = yield call(SkillService.edit, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editSkillSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Edit skill", data.message);
    }
    yield put(
      getSkillRequest(
        callbackObj(null, callback("Inside callback after get all skill"))
      )
    );
  } catch (e: any) {
    yield put(
      editSkillFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Edit skill", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* deleteSkillSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISkillResponse = yield call(
      SkillService.delete,
      action.payload.values.skillId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteSkillSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, data.message, data.data.message);
    }
    yield put(
      getSkillRequest(
        callbackObj(null, callback("Inside callback after get all skill"))
      )
    );
  } catch (e: any) {
    yield put(
      deleteSkillFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Delete skill", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* getSkillByIdSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISkillResponse = yield call(
      SkillService.getById,
      action.payload.values.skillId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getSkillByIdSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getSkillByIdFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* findSkillByKeywordSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISkillResponse = yield call(
      SkillService.findByKeyword,
      action.payload.values.keyword
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(findSkillByKeywordSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      findSkillByKeywordFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}

function* skillSaga() {
  yield all([takeLatest(GET_SKILL_REQUEST, getSkillSaga)]);
  yield all([takeLatest(ADD_SKILL_REQUEST, addSkillSaga)]);
  yield all([takeLatest(EDIT_SKILL_REQUEST, editSkillSaga)]);
  yield all([takeLatest(DELETE_SKILL_REQUEST, deleteSkillSaga)]);
  yield all([takeLatest(GET_SKILL_BY_ID_REQUEST, getSkillByIdSaga)]);
  yield all([
    takeLatest(FIND_SKILL_BY_KEYWORD_REQUEST, findSkillByKeywordSaga),
  ]);
}

export default skillSaga;
