import { all, call, put, takeLatest } from "redux-saga/effects";
import { callback, callbackObj } from "../../components/global/Global";
import {
  NOTIF_TYPE,
  openNotification,
} from "../../components/notification/notification";
import { STATUS_CODE } from "../../utils/config/configSetting";
import { hideDrawer } from "../actions/drawer.action";
import {
  addSubCategoryFailure,
  addSubCategorySuccess,
  deleteSubCategoryFailure,
  deleteSubCategorySuccess,
  editSubCategoryFailure,
  editSubCategorySuccess,
  findSubCategoryByKeywordFailure,
  findSubCategoryByKeywordSuccess,
  getSubCategoryByIdFailure,
  getSubCategoryByIdSuccess,
  getSubCategoryFailure,
  getSubCategoryRequest,
  getSubCategorySuccess,
} from "../actions/subCategory.action";
import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loading.actionTypes";
import {
  ADD_SUBCATEGORY_REQUEST,
  DELETE_SUBCATEGORY_REQUEST,
  EDIT_SUBCATEGORY_REQUEST,
  FIND_SUBCATEGORY_BY_KEYWORD_REQUEST,
  GET_SUBCATEGORY_BY_ID_REQUEST,
  GET_SUBCATEGORY_REQUEST,
} from "../actionTypes/subCategory.actionTypes";
import { SubCategoryService } from "../services/subCategoryService";
import { ISubCategoryResponse } from "../types/subCategory.type";

function* getSubCategorySaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISubCategoryResponse = yield call(
      SubCategoryService.get
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getSubCategorySuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getSubCategoryFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* addSubCategorySaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISubCategoryResponse = yield call(
      SubCategoryService.add,
      {
        ...action.payload.values,
      }
    );
    if (status === STATUS_CODE.CREATE) {
      yield put(addSubCategorySuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Add Sub Category", data.message);
    }
    yield put(
      getSubCategoryRequest(
        callbackObj(null, callback("Inside callback after get all subCategory"))
      )
    );
  } catch (e: any) {
    yield put(
      addSubCategoryFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Add Sub Category", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* editSubCategorySaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISubCategoryResponse = yield call(
      SubCategoryService.edit,
      {
        ...action.payload.values,
      }
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editSubCategorySuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Edit Sub Category", data.message);
    }
    yield put(
      getSubCategoryRequest(
        callbackObj(null, callback("Inside callback after get all subCategory"))
      )
    );
  } catch (e: any) {
    yield put(
      editSubCategoryFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Edit Sub Category", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* deleteSubCategorySaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISubCategoryResponse = yield call(
      SubCategoryService.delete,
      action.payload.values.subCategoryId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteSubCategorySuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, data.message, data.data.message);
    }
    yield put(
      getSubCategoryRequest(
        callbackObj(null, callback("Inside callback after get all subCategory"))
      )
    );
  } catch (e: any) {
    yield put(
      deleteSubCategoryFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Delete Sub Category", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* getSubCategoryByIdSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISubCategoryResponse = yield call(
      SubCategoryService.getById,
      action.payload.values.subCategoryId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getSubCategoryByIdSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getSubCategoryByIdFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* findSubCategoryByKeywordSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ISubCategoryResponse = yield call(
      SubCategoryService.findByKeyword,
      action.payload.values.keyword
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(findSubCategoryByKeywordSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      findSubCategoryByKeywordFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}

function* subCategorySaga() {
  yield all([takeLatest(GET_SUBCATEGORY_REQUEST, getSubCategorySaga)]);
  yield all([takeLatest(ADD_SUBCATEGORY_REQUEST, addSubCategorySaga)]);
  yield all([takeLatest(EDIT_SUBCATEGORY_REQUEST, editSubCategorySaga)]);
  yield all([takeLatest(DELETE_SUBCATEGORY_REQUEST, deleteSubCategorySaga)]);
  yield all([
    takeLatest(GET_SUBCATEGORY_BY_ID_REQUEST, getSubCategoryByIdSaga),
  ]);
  yield all([
    takeLatest(
      FIND_SUBCATEGORY_BY_KEYWORD_REQUEST,
      findSubCategoryByKeywordSaga
    ),
  ]);
}

export default subCategorySaga;
