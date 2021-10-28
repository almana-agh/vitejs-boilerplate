import { createSelector } from "reselect";
import { initialState } from "./slice";

const selectPosts = (state) => state.posts || initialState;

export const makeSelectPosts = () =>
  createSelector(selectPosts, (state) =>
    state.posts.filter((item) => item?.title.length < 30)
  );

export const makeSelectLoading = () =>
  createSelector(selectPosts, (state) => state.loading);
