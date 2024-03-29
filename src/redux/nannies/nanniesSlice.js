import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      console.log(payload);
      state.filter = payload;
    },
  },
});

export const nanniesReducer = nanniesSlice.reducer;
export const { changeFilter } = nanniesSlice.actions;
