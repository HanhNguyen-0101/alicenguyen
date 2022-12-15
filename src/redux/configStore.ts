import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers/root.reducer";

const middlewareSaga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(middlewareSaga, logger));
middlewareSaga.run(rootSaga);

export default store;