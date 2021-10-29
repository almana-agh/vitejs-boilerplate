import { put, takeLatest, all } from "redux-saga/effects";
import request from "../../utils/request";
import * as actions from "./slice";

function* workerLoginRequest(action) {
  try {
    const { values, history } = action.payload;
    console.log(action.payload);
    const response = yield request.post("/auth/login", {
      data: {
        userName: values.username,
        ...values,
      },
    });
    request.interceptors.request.use(async (url, options) => {
      if (res.token !== undefined) {
        options.headers.Authorization = `Bearer ${res.token}`;
        return {
          url,
          options,
          headers: { ...options.headers },
        };
      }
      return {
        url,
        options,
        headers: { ...options.headers },
      };
    });
    const res = yield put(actions.loginSuccess(response));
    history.push("/locations");
  } catch (error) {
    console.error(error);
  }
}

function* loginSaga() {
  yield all([takeLatest(actions.loginRequest, workerLoginRequest)]);
}

export default loginSaga;
