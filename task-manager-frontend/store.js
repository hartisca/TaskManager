import { configureStore } from '@reduxjs/toolkit'
import userReducer from './src/state/userSlice'

export const store = configureStore({
  reducer: {
      user: userReducer
    }
})