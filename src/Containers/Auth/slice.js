import { createSlice } from "@reduxjs/toolkit";
import { NAME_SPACE } from "./constants";

export const initialState = {
  loading: false,
  loginData: {},
};

const authSlice = createSlice({
  name: NAME_SPACE,
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loginData = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginRequest, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
