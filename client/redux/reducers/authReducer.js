import { createSlice } from '@reduxjs/toolkit';
import { login, signup, logout } from '../actions/authActions';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.status = 'idle';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.token = action.payload;
        state.status = 'idle';
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.status = 'idle';
      });
  },
});

export default authSlice.reducer;
