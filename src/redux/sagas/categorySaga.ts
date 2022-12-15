import { all, call, put, takeLatest } from "redux-saga/effects";
import { callback, callbackObj } from "../../components/global/Global";
import {
  NOTIF_TYPE,
  openNotification,
} from "../../components/notification/notification";
import { STATUS_CODE } from "../../utils/config/configSetting";
import {
  addCategoryFailure,
  addCategorySuccess,
  deleteCategoryFailure,
  deleteCategorySuccess,
  editCategoryFailure,
  editCategorySuccess,
  findCategoryByKeywordFailure,
  findCategoryByKeywordSuccess,
  getCategoryByIdFailure,
  getCategoryByIdSuccess,
  getCategoryFailure,
  getCategoryRequest,
  getCategorySuccess,
} from "../actions/category.action";
import { hideDrawer } from "../actions/drawer.action";
import {
  ADD_CATEGORY_REQUEST,
  DELETE_CATEGORY_REQUEST,
  EDIT_CATEGORY_REQUEST,
  FIND_CATEGORY_BY_KEYWORD_REQUEST,
  GET_CATEGORY_BY_ID_REQUEST,
  GET_CATEGORY_REQUEST,
} from "../actionTypes/category.actionTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loading.actionTypes";
import { CategoryService } from "../services/categoryService";
import {
  ICategoryResponse,
} from "../types/category.type";

function* getCategorySaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ICategoryResponse = yield call(CategoryService.get);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getCategorySuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getCategoryFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* addCategorySaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ICategoryResponse = yield call(
      CategoryService.add,
      {
        ...action.payload.values,
      }
    );
    if (status === STATUS_CODE.CREATE) {
      yield put(addCategorySuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Add category", data.message);
    }
    yield put(
      getCategoryRequest(
        callbackObj(null, callback("Inside callback after get all category"))
      )
    );
  } catch (e: any) {
    yield put(
      addCategoryFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Add category", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* editCategorySaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ICategoryResponse = yield call(
      CategoryService.edit,
      {
        ...action.payload.values,
      }
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editCategorySuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Edit category", data.message);
    }
    yield put(
      getCategoryRequest(
        callbackObj(null, callback("Inside callback after get all category"))
      )
    );
  } catch (e: any) {
    yield put(
      editCategoryFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Edit category", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* deleteCategorySaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ICategoryResponse = yield call(
      CategoryService.delete,
      action.payload.values.categoryId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteCategorySuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, data.message, data.data.message);
    }
    yield put(
      getCategoryRequest(
        callbackObj(null, callback("Inside callback after get all category"))
      )
    );
  } catch (e: any) {
    yield put(
      deleteCategoryFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Delete category", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* getCategoryByIdSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ICategoryResponse = yield call(
      CategoryService.getById,
      action.payload.values.categoryId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getCategoryByIdSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getCategoryByIdFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* findCategoryByKeywordSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: ICategoryResponse = yield call(
      CategoryService.findByKeyword,
      action.payload.values.keyword
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(findCategoryByKeywordSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      findCategoryByKeywordFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}

function* categorySaga() {
  yield all([takeLatest(GET_CATEGORY_REQUEST, getCategorySaga)]);
  yield all([takeLatest(ADD_CATEGORY_REQUEST, addCategorySaga)]);
  yield all([takeLatest(EDIT_CATEGORY_REQUEST, editCategorySaga)]);
  yield all([takeLatest(DELETE_CATEGORY_REQUEST, deleteCategorySaga)]);
  yield all([takeLatest(GET_CATEGORY_BY_ID_REQUEST, getCategoryByIdSaga)]);
  yield all([
    takeLatest(FIND_CATEGORY_BY_KEYWORD_REQUEST, findCategoryByKeywordSaga),
  ]);
}

export default categorySaga;
