import { createSelector } from "reselect";
import { initialState } from "./slice";

const selectLoginData = (state) => state.loginData || initialState;

export const makeSelectLogin = () =>
  createSelector(selectLoginData, (state) => {
    return { loading: state.loading, loginData: state.loginData };
  });
