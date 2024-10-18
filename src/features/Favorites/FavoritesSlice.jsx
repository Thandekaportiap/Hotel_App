// features/Favorites/FavoritesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../components/Firebase'; // Import your Firestore instance

import { collection, getDocs, query, where } from 'firebase/firestore';

export const fetchFavorites = createAsyncThunk(
    'favorites/fetchFavorites',
    async (customerId) => {
        const q = query(collection(db, 'favorites'), where('customerId', '==', customerId));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
);

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavorites.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                state.loading = false;
                state.favorites = action.payload; // Set fetched favorites
            })
            .addCase(fetchFavorites.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Capture any errors
            });
    },
});

export const selectFavorites = (state) => state.favorites.favorites;
export const selectLoading = (state) => state.favorites.loading;
export const selectError = (state) => state.favorites.error;

export default favoritesSlice.reducer;
