import { AppState } from "..";

export const selectUsers = (state: AppState) => state.users.data;
export const selectPage = (state: AppState) => state.users.page;
export const selectIsLastPage = (state: AppState) => state.users.page === state.users.total_pages;

