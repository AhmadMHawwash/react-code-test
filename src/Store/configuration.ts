import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ducks from "../Ducks";

const rootReducer = combineReducers({
  users: ducks.usersSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
