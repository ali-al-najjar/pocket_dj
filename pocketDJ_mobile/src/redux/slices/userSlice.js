import { createSlice } from '@reduxjs/toolkit';

const userDetailSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
    clearUser: () => null,
  },
});

export const { setUser, clearUser } = userDetailSlice.actions;

export default userDetailSlice.reducer;
