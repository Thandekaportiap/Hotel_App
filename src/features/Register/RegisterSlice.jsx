// src/features/registerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: null,
    isregisterenticated: false,
  },
  reducers: {
   
  },
});

export const { setUser, logout } = registerSlice.actions;
export default registerSlice.reducer;
