import { createSlice } from "@reduxjs/toolkit";
import { NAME_SPACE } from "./constants";

export const initialState = {
  loading: false,
  locationsData: [],
};

const locationsSlice = createSlice({
  name: NAME_SPACE,
  initialState,
  reducers: {
    getLocationsRequest: (state) => {
      state.loading = true;
    },
    getLocationsSuccess: (state, action) => {
      state.locationsData = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getLocationsRequest, getLocationsSuccess } =
  locationsSlice.actions;

export default locationsSlice.reducer;
