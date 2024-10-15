// src/features/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    user: null,
    isbookingenticated: false,
  },
  reducers: {
   
  },
});

export const { setUser, logout } = bookingSlice.actions;
export default bookingSlice.reducer;
