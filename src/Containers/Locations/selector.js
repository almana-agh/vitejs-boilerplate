import { createSelector } from "reselect";
import { initialState } from "./slice";

const selectLoctionsData = (state) => state.locationsData || initialState;

export const makeSelectLocation = () =>
  createSelector(selectLoctionsData, (state) => {
    return { loading: state.loading, loginData: state.locationsData };
  });
