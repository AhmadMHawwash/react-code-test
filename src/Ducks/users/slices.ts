import { createSlice } from "@reduxjs/toolkit";
import { APIData } from "../../Types";
import { fetchUsers } from "./api";

export interface UsersState extends APIData {}

const initialState: UsersState = {
  data: [],
  page: 1,
  per_page: 0,
  total: 0,
  total_pages: 0,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getPage: (state: UsersState) => console.log(state),
    getNextPage: (state: UsersState) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      if (!action.payload) return state;
      return {
        ...state,
        ...action.payload,
        page: action.payload.page + 1,
        data: [...state.data, ...action.payload.data],
      };
    });
  },
});
