import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice/user-slice";

// * Configuring the store
const store = configureStore({ reducer: { currentUser: userSlice } });

export default store;
