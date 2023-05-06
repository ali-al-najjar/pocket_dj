import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = userAuthSlice.actions;

export default userAuthSlice.reducer;