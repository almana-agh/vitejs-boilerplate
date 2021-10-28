import { put, takeLatest, all } from "redux-saga/effects";
import request from "../../utils/request";
import * as actions from "./slice";

function* workerFetchUsers(action) {
  try {
    const response = yield request.get("posts");
    yield put(actions.fetchPostsSuccess(response));
  } catch (error) {
    console.error(error);
  }
}

function* counterSaga() {
  yield all([takeLatest(actions.fetchPostsRequest, workerFetchUsers)]);
}

export default counterSaga;
