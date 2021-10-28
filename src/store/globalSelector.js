import { createSelector } from "reselect";
import { initialState } from "./slice";

const selectGlobal = (state) => state.global || initialState;

export const makeSelectCount = () =>
  createSelector(selectGlobal, (state) => state.count);
