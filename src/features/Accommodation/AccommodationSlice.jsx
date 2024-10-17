
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../components/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


export const addAccommodation = createAsyncThunk(
    'accommodations/addAccommodation',
    async ({ formData, userId }, { rejectWithValue }) => {
        try {
            const accommodationWithUserId = { ...formData, userId };
            await addDoc(collection(db, 'accommodations'), accommodationWithUserId);
            toast.success('Accommodation added successfully!');
        } catch (error) {
            console.error('Error adding accommodation:', error);
            toast.error('Error adding accommodation: ' + error.message);
            return rejectWithValue(error.message);
        }
    }
);

const accommodationSlice = createSlice({
    name: 'accommodations',
    initialState: {
        status: 'idle', 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addAccommodation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addAccommodation.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(addAccommodation.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default accommodationSlice.reducer;
