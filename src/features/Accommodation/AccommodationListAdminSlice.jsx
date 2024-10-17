import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../components/Firebase';
import { collection, query, where, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

// Fetch accommodations for a specific user
export const fetchAccommodationList = createAsyncThunk(
    'accommodations/fetchAccommodationList',
    async (userId) => {
        const accommodationsRef = collection(db, 'accommodations');
        const q = query(accommodationsRef, where("userId", "==", userId));
        const snapshot = await getDocs(q);
        const accommodationList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return accommodationList;
    }
);

export const deleteAccommodation = createAsyncThunk(
    'accommodations/deleteAccommodation',
    async (id) => {
        const accommodationRef = doc(db, 'accommodations', id);
        await deleteDoc(accommodationRef);
        return id; 
    }
);

export const updateAccommodation = createAsyncThunk(
    'accommodations/updateAccommodation',
    async ({ id, data }) => {
        const accommodationRef = doc(db, 'accommodations', id);
        await updateDoc(accommodationRef, data);
        return { id, data }; 
    }
);

const accommodationListAdminSlice = createSlice({
    name: 'accommodations',
    initialState: {
        accommodationList: [],
        loading: false,
        error: null,
    },
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
            })
            .addCase(deleteAccommodation.fulfilled, (state, action) => {
                state.accommodationList = state.accommodationList.filter(accommodation => accommodation.id !== action.payload);
            })
            .addCase(updateAccommodation.fulfilled, (state, action) => {
                const index = state.accommodationList.findIndex(accommodation => accommodation.id === action.payload.id);
                if (index !== -1) {
                    state.accommodationList[index] = { ...state.accommodationList[index], ...action.payload.data };
                }
            });
    },
});

export default accommodationListAdminSlice.reducer;
