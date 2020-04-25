import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { AppState } from "..";
import { UsersState } from "./slices";

export const fetchUsers = createAsyncThunk<
  UsersState,
  number,
  {
    dispatch: Dispatch;
    state: AppState;
    extra: {
      jwt: string;
    };
  }
>("users/fetch", async (page: number, thunkAPI) => {
  const state = thunkAPI.getState();
  if (state.users.total_pages && state.users.total_pages < page) return;
  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  const data = await response.json();
  return data;
});
