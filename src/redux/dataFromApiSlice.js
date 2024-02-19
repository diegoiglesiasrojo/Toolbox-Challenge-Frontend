import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const dataFromApiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getData } = dataFromApiSlice.actions;

export default dataFromApiSlice.reducer;
