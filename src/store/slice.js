import { createSlice } from "@reduxjs/toolkit";
import { GLOBAL_NAME_SPACE } from "./constants";

export const initialState = {
  count: 0,
};

export const globalSlice = createSlice({
  name: GLOBAL_NAME_SPACE,
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = globalSlice.actions;

export default globalSlice.reducer;
