import { all, call, put, takeLatest } from "redux-saga/effects";
import { callback, callbackObj } from "../../components/global/Global";
import {
  NOTIF_TYPE,
  openNotification,
} from "../../components/notification/notification";
import { STATUS_CODE } from "../../utils/config/configSetting";
import {
  addContactFailure,
  addContactSuccess,
  deleteContactFailure,
  deleteContactSuccess,
  editContactFailure,
  editContactSuccess,
  findContactByKeywordFailure,
  findContactByKeywordSuccess,
  getContactByIdFailure,
  getContactByIdSuccess,
  getContactFailure,
  getContactRequest,
  getContactSuccess,
} from "../actions/contact.action";
import { hideDrawer } from "../actions/drawer.action";
import {
  ADD_CONTACT_REQUEST,
  DELETE_CONTACT_REQUEST,
  EDIT_CONTACT_REQUEST,
  FIND_CONTACT_BY_KEYWORD_REQUEST,
  GET_CONTACT_BY_ID_REQUEST,
  GET_CONTACT_REQUEST,
} from "../actionTypes/contact.actionTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loading.actionTypes";
import { ContactService } from "../services/contactService";
import { IContactResponse } from "../types/contact.type";

function* getContactSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IContactResponse = yield call(ContactService.get);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getContactSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getContactFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* addContactSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IContactResponse = yield call(ContactService.add, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.CREATE) {
      yield put(addContactSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Add contact", data.message);
    }
    yield put(
      getContactRequest(
        callbackObj(null, callback("Inside callback after get all contact"))
      )
    );
  } catch (e: any) {
    yield put(
      addContactFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Add contact", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* editContactSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IContactResponse = yield call(ContactService.edit, {
      ...action.payload.values,
    });
    if (status === STATUS_CODE.SUCCESS) {
      yield put(editContactSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, "Edit contact", data.message);
    }
    yield put(
      getContactRequest(
        callbackObj(null, callback("Inside callback after get all contact"))
      )
    );
  } catch (e: any) {
    yield put(
      editContactFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Edit contact", e.message);
  }
  yield put(hideDrawer());
  yield put({
    type: HIDE_LOADING,
  });
}
function* deleteContactSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IContactResponse = yield call(
      ContactService.delete,
      action.payload.values.contactId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(deleteContactSuccess(data));
      action.payload.callback(data);
      openNotification(NOTIF_TYPE.SUCCESS, data.message, data.data.message);
    }
    yield put(
      getContactRequest(
        callbackObj(null, callback("Inside callback after get all contact"))
      )
    );
  } catch (e: any) {
    yield put(
      deleteContactFailure({
        error: e.message,
      })
    );
    openNotification(NOTIF_TYPE.ERROR, "Delete contact", e.message);
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* getContactByIdSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IContactResponse = yield call(
      ContactService.getById,
      action.payload.values.contactId
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getContactByIdSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      getContactByIdFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}
function* findContactByKeywordSaga(action: any) {
  yield put({
    type: SHOW_LOADING,
  });
  try {
    const { data, status }: IContactResponse = yield call(
      ContactService.findByKeyword,
      action.payload.values.keyword
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put(findContactByKeywordSuccess(data));
      action.payload.callback(data);
    }
  } catch (e: any) {
    yield put(
      findContactByKeywordFailure({
        error: e.message,
      })
    );
  }
  yield put({
    type: HIDE_LOADING,
  });
}

function* contactSaga() {
  yield all([takeLatest(GET_CONTACT_REQUEST, getContactSaga)]);
  yield all([takeLatest(ADD_CONTACT_REQUEST, addContactSaga)]);
  yield all([takeLatest(EDIT_CONTACT_REQUEST, editContactSaga)]);
  yield all([takeLatest(DELETE_CONTACT_REQUEST, deleteContactSaga)]);
  yield all([takeLatest(GET_CONTACT_BY_ID_REQUEST, getContactByIdSaga)]);
  yield all([
    takeLatest(FIND_CONTACT_BY_KEYWORD_REQUEST, findContactByKeywordSaga),
  ]);
}

export default contactSaga;
