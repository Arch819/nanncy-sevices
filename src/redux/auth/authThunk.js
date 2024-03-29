import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUpThunk = createAsyncThunk(
  "auth/signup",
  async (body, { rejectWithValue }) => {
    try {
      // return await fetchSignUp(body);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/signin",
  async (body, { rejectWithValue }) => {
    try {
      // return await fetchSignIn(body);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      // return await fetchLogout();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (!persistedToken) {
        return thunkAPI.rejectWithValue("Unable to fetch user");
      }
      // return await fetchRefresh(persistedToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
