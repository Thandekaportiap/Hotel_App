// features/BookingHistory/BookingHistorySlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../components/Firebase'; // Adjust path

// Fetch bookings by customer ID
export const fetchCustomerBookingHistory = createAsyncThunk(
  'bookingHistory/fetchCustomerBookingHistory', // Update action type
  async (customerId) => {
    const bookingsQuery = query(
      collection(db, 'bookings'),
      where('customerId', '==', customerId) // Fetch based on customerId
    );
    const snapshot = await getDocs(bookingsQuery);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
);

const bookingHistorySlice = createSlice({
  name: 'bookingHistory', // Update slice name
  initialState: {
    customerBookings: [], // State for storing customer booking history
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomerBookingHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomerBookingHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.customerBookings = action.payload;
      })
      .addCase(fetchCustomerBookingHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectCustomerBookingHistory = (state) => state.bookingHistory.customerBookings;
export const selectLoading = (state) => state.bookingHistory.loading;
export const selectError = (state) => state.bookingHistory.error;

export default bookingHistorySlice.reducer;
