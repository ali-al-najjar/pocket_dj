import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'
import tokenReducer from './slices/userAuthSlice'

const reducer = {
   auth: authReducer,
   user: userReducer,
   token: tokenReducer
}

export const store = configureStore({
   reducer
})