import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("accessToken") || null
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload
      localStorage.setItem("accessToken", action.payload)
    },
    logout: (state) => {
      state.value = null
      localStorage.removeItem("accessToken")
    },
  },
})

export const { login, logout } = tokenSlice.actions
export default tokenSlice.reducer