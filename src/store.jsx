import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './features/Register/RegisterSlice.jsx'
import accommodationReducer from './features/Accommodation/AccommodationSlice.jsx'
import accommodationListReducer from './features/Accommodation/AccommodationListSlice.jsx'
import accommodationListAdminReducer from './features/Accommodation/AccommodationListAdminSlice.jsx'

export const store = configureStore({
  reducer: {
    register: registerReducer,
    accommodations: accommodationReducer,
    accommodations: accommodationListReducer,
    accommodations: accommodationListAdminReducer,
  },
})

export default store;

