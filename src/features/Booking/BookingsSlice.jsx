import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../components/Firebase'; 
import { collection, addDoc } from 'firebase/firestore';

export const submitBooking = createAsyncThunk(
    'booking/submitBooking',
    async (bookingDetails) => {
        const bookingRef = collection(db, 'bookings'); 
        const docRef = await addDoc(bookingRef, bookingDetails);
        return { id: docRef.id, ...bookingDetails }; 
    }
);

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        bookings: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitBooking.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings.push(action.payload); 
            })
            .addCase(submitBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { actions, reducer } = bookingSlice;
export default reducer;
