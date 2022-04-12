import { configureStore } from '@reduxjs/toolkit'
import numberOfUsersReducer from './numberOfUsersSlice'
export const store = configureStore({
  reducer: {
    numberOfUsers:numberOfUsersReducer,
  },
})