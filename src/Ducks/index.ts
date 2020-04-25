import { usersSlice } from "./users";
import { UsersState } from "./users/slices";

export interface AppState {
  users: UsersState
}

export default {
  usersSlice
};
