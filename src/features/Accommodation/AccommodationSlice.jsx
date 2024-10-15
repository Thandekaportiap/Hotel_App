// src/features/accommodationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const accommodationSlice = createSlice({
  name: 'accommodation',
  initialState: {
    user: null,
    isaccommodationenticated: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isaccommodationenticated = !!action.payload;
    },
    logout(state) {
      state.user = null;
      state.isaccommodationenticated = false;
    },
  },
});

export const { setUser, logout } = accommodationSlice.actions;
export default accommodationSlice.reducer;
