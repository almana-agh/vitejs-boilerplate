import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";
import { composeWithDevTools } from "redux-devtools-extension";

import globalReducer from "./slice";

function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    ...injectedReducers,
    // other non-injected reducers can go here...
  });

  return rootReducer;
}

const sagaMiddleware = createSagaMiddleware();

const runSaga = sagaMiddleware.run;
const injectEnhancer = createInjectorsEnhancer({ createReducer, runSaga });

const middlewares = [sagaMiddleware];

const store = createStore(
  createReducer(),
  {},
  composeWithDevTools(applyMiddleware(...middlewares), injectEnhancer)
);

// then run the saga
export default store;
