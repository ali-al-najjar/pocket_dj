import { configureStore } from '@reduxjs/toolkit';
import userDetailReducer from './slices/UserDetailSlice';
import userAuthReducer from './slices/UserAuthSlice';
const reducer = {
  user: userDetailReducer,
  token: userAuthReducer
}

export const store = configureStore({
  reducer
})