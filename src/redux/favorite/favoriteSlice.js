import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { isInclude } from "../../utils/isInclude";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    changeFavoriteFilter(state, { payload }) {
      state.filter = payload;
    },
    addToFavorite(state, { payload }) {
      const isItemInList = isInclude(state.favoriteNannies, "_id", payload._id);
      if (!isItemInList.isExist) {
        state.favoriteNannies.push(payload);
      }
    },
    removeFromFavorite(state, { payload }) {
      state.favoriteNannies = state.favoriteNannies.filter(
        (i) => i._id !== payload._id
      );
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
