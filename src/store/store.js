import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../feautures/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;
