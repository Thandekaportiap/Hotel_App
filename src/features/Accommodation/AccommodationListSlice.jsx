import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../components/Firebase';
import { collection, getDocs } from 'firebase/firestore';

export const fetchAccommodationList = createAsyncThunk(
    'accommodations/fetchAccommodationList',
    async () => {
        const accommodationsRef = collection(db, 'accommodations');
        const snapshot = await getDocs(accommodationsRef);
        const accommodationList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return accommodationList;
    }
);

const accommodationListSlice = createSlice({
    name: 'accommodations',
    initialState: {
        accommodationList: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccommodationList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAccommodationList.fulfilled, (state, action) => {
                state.loading = false;
                state.accommodationList = action.payload;
            })
            .addCase(fetchAccommodationList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default accommodationListSlice.reducer;
