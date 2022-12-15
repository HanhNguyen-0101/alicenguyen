import { all, call, put, takeLatest } from "redux-saga/effects";
import { callback, callbackObj } from "../../components/global/Global";
import {
  NOTIF_TYPE,
  openNotification,
} from "../../components/notification/notification";
import { STATUS_CODE } from "../../utils/config/configSetting";
import { hideDrawer } from "../actions/drawer.action";
import {
  addMediaFailure,
  addMediaSuccess,
  deleteMediaFailure,
  deleteMediaSuccess,
  editMediaFailure,
  editMediaSuccess,
  findMediaByKeywordFailure,
  findMediaByKeywordSuccess,
  getMediaByIdFailure,
  getMediaByIdSuccess,
  getMediaFailure,
  getMediaRequest,
  getMediaSuccess,
} from "../actions/media.action";
import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loading.actionTypes";
import {
  ADD_MEDIA_REQUEST,
  DELETE_MEDIA_REQUEST,
  EDIT_MEDIA_REQUEST,
  FIND_MEDIA_BY_KEYWORD_REQUEST,
  GET_MEDIA_BY_ID_REQUEST,
  GET_MEDIA_REQUEST,
} from "../actionTypes/media.actionTypes";
import { MediaService } from "../services/mediaService";
import { IMediaResponse } from "../types/media.type";

function* getMediaSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IMediaResponse = yield call(MediaService.get);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getMediaSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getMediaFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* addMediaSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IMediaResponse = yield call(MediaService.add, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.CREATE) {
      put(addMediaSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Add media", data.message);
    }
    yield put(
      getMediaRequest(
        callbackObj(null, callback("Inside callback after get all media"))
      )
    );
  } catch (e: any) {
    yield put(
      addMediaFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Add media", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* editMediaSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IMediaResponse = yield call(MediaService.edit, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editMediaSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Edit media", data.message);
    }
    yield put(
      getMediaRequest(
        callbackObj(null, callback("Inside callback after get all media"))
      )
    );
  } catch (e: any) {
    yield put(
      editMediaFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Edit media", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* deleteMediaSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IMediaResponse = yield call(
      MediaService.delete,
      action.payload.values.mediaId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteMediaSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, data.message, data.data.message);
    }
    yield put(
      getMediaRequest(
        callbackObj(null, callback("Inside callback after get all media"))
      )
    );
  } catch (e: any) {
    yield put(
      deleteMediaFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Delete media", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* getMediaByIdSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IMediaResponse = yield call(
      MediaService.getById,
      action.payload.values.mediaId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getMediaByIdSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getMediaByIdFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* findMediaByKeywordSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IMediaResponse = yield call(
      MediaService.findByKeyword,
      action.payload.values.keyword
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(findMediaByKeywordSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      findMediaByKeywordFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}

function* mediaSaga() {
  yield all([takeLatest(GET_MEDIA_REQUEST, getMediaSaga)]);
  yield all([takeLatest(ADD_MEDIA_REQUEST, addMediaSaga)]);
  yield all([takeLatest(EDIT_MEDIA_REQUEST, editMediaSaga)]);
  yield all([takeLatest(DELETE_MEDIA_REQUEST, deleteMediaSaga)]);
  yield all([takeLatest(GET_MEDIA_BY_ID_REQUEST, getMediaByIdSaga)]);
  yield all([
    takeLatest(FIND_MEDIA_BY_KEYWORD_REQUEST, findMediaByKeywordSaga),
  ]);
}

export default mediaSaga;
