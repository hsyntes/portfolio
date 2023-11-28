import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice/user-slice";
import themeSlice from "./theme-slice/theme-slice";

// * Configuring the store
const store = configureStore({
  reducer: { currentUser: userSlice, theme: themeSlice },
});

export default store;
