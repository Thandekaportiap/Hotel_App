import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../components/Firebase';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

// Fetch favorites function
export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (customerId) => {
    const q = query(collection(db, 'favorites'), where('customerId', '==', customerId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
);

// Remove favorite function
export const removeFavorite = createAsyncThunk(
  'favorites/removeFavorite',
  async (id) => {
    await deleteDoc(doc(db, 'favorites', id));
    return id;
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
        state.favorites = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);
      });
  },
});

export const selectFavorites = (state) => state.favorites.favorites;
export const selectLoading = (state) => state.favorites.loading;
export const selectError = (state) => state.favorites.error;

export default favoritesSlice.reducer;
