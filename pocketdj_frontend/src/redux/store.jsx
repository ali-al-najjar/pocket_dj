import { configureStore } from '@reduxjs/toolkit';
import userDetailReducer from './slices/UserDetailSlice';

const reducer = {
  user: userDetailReducer
}

export const store = configureStore({
  reducer
})