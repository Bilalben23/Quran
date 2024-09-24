import { configureStore } from "@reduxjs/toolkit";
import serverReducer from "./theServer/serverSlice";

export const store = configureStore({
  reducer: { serverReducer },
});
