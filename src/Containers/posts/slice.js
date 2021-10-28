import { createSlice } from "@reduxjs/toolkit";
import { NAME_SPACE } from "./constants";

export const initialState = {
  loading: false,
  posts: [],
};

const postsSlice = createSlice({
  name: NAME_SPACE,
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.posts = [];
      state.loading = true;
    },
    fetchPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchPostsRequest, fetchPostsSuccess } = postsSlice.actions;

export default postsSlice.reducer;
