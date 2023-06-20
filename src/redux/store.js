import { configureStore } from "@reduxjs/toolkit";
import posts from "./posts/slice";

export const store = configureStore({
  reducer: { posts },
});