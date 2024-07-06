import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLightMode: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});

export const { toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
