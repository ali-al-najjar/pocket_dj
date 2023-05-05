import { configureStore } from '@reduxjs/toolkit';
import userDetailReducer from './slices/UserDetailSlice';
import userAuthReducer from './slices/UserAuthSlice';
import userRoleReducer from './slices/UserRoleSlice';
const reducer = {
  user: userDetailReducer,
  token: userAuthReducer,
  role: userRoleReducer,
}

export const store = configureStore({
  reducer
})