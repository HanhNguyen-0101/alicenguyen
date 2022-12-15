import { all, call, put, takeLatest } from "redux-saga/effects";
import { callback, callbackObj } from "../../components/global/Global";
import {
  NOTIF_TYPE,
  openNotification,
} from "../../components/notification/notification";
import { STATUS_CODE } from "../../utils/config/configSetting";
import {
  addBlogFailure,
  addBlogSuccess,
  deleteBlogFailure,
  deleteBlogSuccess,
  editBlogFailure,
  editBlogSuccess,
  findBlogByKeywordFailure,
  findBlogByKeywordSuccess,
  findBlogBySubCategoryIdFailure,
  findBlogBySubCategoryIdSuccess,
  getBlogByIdFailure,
  getBlogByIdSuccess,
  getBlogFailure,
  getBlogRequest,
  getBlogSuccess,
} from "../actions/blog.action";
import { hideDrawer } from "../actions/drawer.action";
import {
  ADD_BLOG_REQUEST,
  DELETE_BLOG_REQUEST,
  EDIT_BLOG_REQUEST,
  FIND_BLOG_BY_KEYWORD_REQUEST,
  FIND_BLOG_BY_SUBCATEGORY_ID_REQUEST,
  GET_BLOG_BY_ID_REQUEST,
  GET_BLOG_REQUEST,
} from "../actionTypes/blog.actionTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loading.actionTypes";
import { BlogService } from "../services/blogService";
import { IBlogResponse } from "../types/blog.type";

function* getBlogSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IBlogResponse = yield call(BlogService.get);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getBlogSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getBlogFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* addBlogSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IBlogResponse = yield call(BlogService.add, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.CREATE) {
      yield put(addBlogSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Add blog", data.message);
    }
    yield put(
      getBlogRequest(
        callbackObj(null, callback("Inside callback after get all blog"))
      )
    );
  } catch (e: any) {
    yield put(
      addBlogFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Add blog", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* editBlogSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IBlogResponse = yield call(BlogService.edit, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editBlogSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Edit blog", data.message);
    }
    yield put(
      getBlogRequest(
        callbackObj(null, callback("Inside callback after get all blog"))
      )
    );
  } catch (e: any) {
    yield put(
      editBlogFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Edit blog", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* deleteBlogSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IBlogResponse = yield call(
      BlogService.delete,
      action.payload.values.blogId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteBlogSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, data.message, data.data.message);
    }
    yield put(
      getBlogRequest(
        callbackObj(null, callback("Inside callback after get all blog"))
      )
    );
  } catch (e: any) {
    yield put(
      deleteBlogFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Delete blog", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* getBlogByIdSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IBlogResponse = yield call(
      BlogService.getById,
      action.payload.values.blogId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getBlogByIdSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getBlogByIdFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* findBlogByKeywordSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IBlogResponse = yield call(
      BlogService.findByKeyword,
      action.payload.values.keyword
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(findBlogByKeywordSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      findBlogByKeywordFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* findBlogBySubCategoryIdSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IBlogResponse = yield call(
      BlogService.findBySubCategoryId,
      action.payload.values.subCategoryId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(findBlogBySubCategoryIdSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      findBlogBySubCategoryIdFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}

function* blogSaga() {
  yield all([takeLatest(GET_BLOG_REQUEST, getBlogSaga)]);
  yield all([takeLatest(ADD_BLOG_REQUEST, addBlogSaga)]);
  yield all([takeLatest(EDIT_BLOG_REQUEST, editBlogSaga)]);
  yield all([takeLatest(DELETE_BLOG_REQUEST, deleteBlogSaga)]);
  yield all([takeLatest(GET_BLOG_BY_ID_REQUEST, getBlogByIdSaga)]);
  yield all([takeLatest(FIND_BLOG_BY_KEYWORD_REQUEST, findBlogByKeywordSaga)]);
  yield all([
    takeLatest(
      FIND_BLOG_BY_SUBCATEGORY_ID_REQUEST,
      findBlogBySubCategoryIdSaga
    ),
  ]);
}

export default blogSaga;
