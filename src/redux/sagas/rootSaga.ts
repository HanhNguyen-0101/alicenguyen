import { all, fork } from "redux-saga/effects";
import authSaga from "./authSaga";
import skillSaga from "./skillSaga";
import contactSaga from "./contactSaga";
import blogSaga from "./blogSaga";
import categorySaga from "./categorySaga";
import mediaSaga from "./mediaSaga";
import projectSaga from "./projectSaga";
import organizationSaga from "./organizationSaga";
import subCategorySaga from "./subCategorySaga";


function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(skillSaga),
    fork(contactSaga),
    fork(blogSaga),
    fork(categorySaga),
    fork(mediaSaga),
    fork(projectSaga),
    fork(organizationSaga),
    fork(subCategorySaga),
  ]);
}

export default rootSaga;
