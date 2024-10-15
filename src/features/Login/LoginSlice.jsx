// src/features/loginSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
    isloginenticated: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isloginenticated = !!action.payload;
    },
    logout(state) {
      state.user = null;
      state.isloginenticated = false;
    },
  },
});

export const { setUser, logout } = loginSlice.actions;
export default loginSlice.reducer;
