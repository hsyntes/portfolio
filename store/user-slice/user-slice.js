import { createSlice } from "@reduxjs/toolkit";

// * User Redux Global State
const userSlice = createSlice({
  name: "current-user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    login(state, action) {
      const { payload } = action;

      state.currentUser = payload;

      return state;
    },
  },
});

// * Export actions and reducer
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
