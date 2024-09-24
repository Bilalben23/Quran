import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  server: "",
};

const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    setServer: (state, payload) => {
      state.server = payload;
    },
  },
});

export const { setServer } = serverSlice.actions;
export default serverSlice.reducer;
