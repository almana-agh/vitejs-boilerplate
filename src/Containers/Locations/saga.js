import { put, takeLatest, all } from "redux-saga/effects";
import request from "../../utils/request";
import * as actions from "./slice";

function* workerFetchLocations(action) {
  try {
    const response = yield request.get("/locations");
    yield put(actions.getLocationsSuccess(response));
  } catch (error) {
    console.error(error);
  }
}

function* loginSaga() {
  yield all([takeLatest(actions.getLocationsRequest, workerFetchLocations)]);
}

export default loginSaga;
