import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    try {
      const response = await axios.post('/api/authentication/auth/login', {
        email,
        password,
      });
      return response.data.token;
    } catch (error) {
      console.error('error logging in user', error);
      throw error;
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async ({
    firstName,
    lastName,
    email,
    username,
    password,
    isAdmin,
    adminPassphrase,
  }) => {
    try {
      const response = await axios.post('/api/authentication/auth/signup', {
        firstName,
        lastName,
        email,
        username,
        password,
        isAdmin,
        adminPassphrase,
      });
      return response.data.token;
    } catch (error) {
      console.error('error signing up user', error);
      throw error;
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/api/authentication/auth/logout');
  } catch (error) {
    console.error('error logging out user', error);
    throw error;
  }
});
