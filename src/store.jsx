import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './features/Register/RegisterSlice.jsx'

export const store = configureStore({
  reducer: {
    register: registerReducer
  },
})

export default store;

