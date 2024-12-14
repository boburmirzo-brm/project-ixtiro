import { configureStore } from '@reduxjs/toolkit'
import token from './slices/token.slice'

export const store = configureStore({
  reducer: {
    token
  },
})