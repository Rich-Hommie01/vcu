import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://backend-av3s.onrender.com/api/auth/login', { username, password });
      return response.data;
    } catch (error) {
      console.error("Login Error:", error.response?.data);
      return rejectWithValue(
        error.response?.data || { message: 'An unknown error occurred during login' }
      );
    }
  }
);

const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    statusMessage: '',
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.statusMessage = '';
      state.error = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.statusMessage = '';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload?.success) {
          state.user = action.payload.user;
          state.statusMessage = '';

          localStorage.setItem('user', JSON.stringify(action.payload.user));
        } else {
          state.statusMessage = action.payload?.message || 'An unknown error occurred';
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error?.message || 'Login failed. Please try again.';
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
