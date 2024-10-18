// features/Booking/BookingsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../components/Firebase'

import { collection, query, where, getDocs } from 'firebase/firestore';

export const fetchBookings = createAsyncThunk(
  'bookings/fetchBookings',
  async (userId) => {
    const bookingsQuery = query(
      collection(db, 'bookings'), // Use collection method
      where('userId', '==', userId)
    );
    
    const snapshot = await getDocs(bookingsQuery); // Use getDocs
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
);


export const updateBooking = createAsyncThunk(
  'bookings/updateBooking',
  async ({ id, data }) => {
    await db.collection('bookings').doc(id).update(data);
    return { id, data };
  }
);

export const deleteBooking = createAsyncThunk(
  'bookings/deleteBooking',
  async (id) => {
    await db.collection('bookings').doc(id).delete();
    return id;
  }
);

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        const index = state.bookings.findIndex(booking => booking.id === action.payload.id);
        if (index !== -1) {
          state.bookings[index] = { ...state.bookings[index], ...action.payload.data };
        }
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.bookings = state.bookings.filter(booking => booking.id !== action.payload);
      });
  },
});

export const selectBookings = (state) => state.bookings.bookings;
export const selectLoading = (state) => state.bookings.loading;
export const selectError = (state) => state.bookings.error;

export default bookingsSlice.reducer;
