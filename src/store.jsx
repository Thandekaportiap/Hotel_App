import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './features/Register/RegisterSlice.jsx'
import accommodationReducer from './features/Accommodation/AccommodationSlice.jsx'

export const store = configureStore({
  reducer: {
    register: registerReducer,
    accommodations: accommodationReducer,
  },
})

export default store;

