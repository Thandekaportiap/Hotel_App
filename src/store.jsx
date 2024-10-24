import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './features/Register/RegisterSlice.jsx'
import accommodationReducer from './features/Accommodation/AccommodationSlice.jsx'
import accommodationListReducer from './features/Accommodation/AccommodationListSlice.jsx'
import accommodationListAdminReducer from './features/Accommodation/AccommodationListAdminSlice.jsx'
import bookingReducer from './features/Booking/BookingsSlice.jsx'
import bookingsReducer from './features/Booking/BookingAdminSlice.jsx'
import userReducer from './features/UsersSlice.jsx'
import favoritesReducer from './features/Favorites/FavoritesSlice.jsx'
import bookingHistoryReducer from './features/Booking/BookingHistory.jsx'

export const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
    accommodations: accommodationReducer,
    accommodations: accommodationListReducer,
    accommodationListAdmin: accommodationListAdminReducer, // Admin list
    booking: bookingReducer,
    bookings: bookingsReducer,
    favorites: favoritesReducer,
    bookingHistory: bookingHistoryReducer,
  },
})

export default store;

