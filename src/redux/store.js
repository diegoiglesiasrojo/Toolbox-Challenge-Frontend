import { configureStore } from "@reduxjs/toolkit";
import dataFromApiReducer from "./dataFromApiSlice";

export const store = configureStore({
  reducer: {
    dataFromApi: dataFromApiReducer,
  },
});
