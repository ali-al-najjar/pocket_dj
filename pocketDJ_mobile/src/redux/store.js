import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'
import homeReducer from './slices/HomeSlice'

const reducer = {
   auth: authReducer,
   user: userReducer,
   home: homeReducer
}

export const store = configureStore({
   reducer
})