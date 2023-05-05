import { createSlice } from '@reduxjs/toolkit';

const userRoleSlice = createSlice({
  name: 'role',
  initialState: null,
  reducers: {
    setRole: (state, action) => action.payload,
  },
});

export const { setRole } = userRoleSlice.actions; 

export default userRoleSlice.reducer;
