import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store/store';

interface UserState {
  users: string[];
  isSigninSuccess: boolean;
  loggedInUser: string;
  isError: boolean;
  isLoading: boolean;
  isSignupSuccess: boolean;
}

/* Setting the initial state of the user slice. */
const initialState: UserState = {
  users: [],
  isSigninSuccess: false,
  loggedInUser: '',
  isError: false,
  isLoading: false,
  isSignupSuccess: false,
};

export const addUser = createAsyncThunk(
  'user/addUser',
  async (user: string) => {
    await axios.post('https://jsonplaceholder.typicode.com/users', {
      name: user,
    });
    return user;
  }
);

export const getUser = createAsyncThunk(
  'user/getUser',
  async (user: string) => {
    await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return user;
  }
);

/* Creating a slice of the Redux store. */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isSigninSuccess = false;
      state.loggedInUser = '';
      state.isError = false;
    },
    clearSignUpSuccess: (state) => {
      state.isSignupSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isError = false;
        state.isSignupSuccess = true;
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        if (state.users.includes(action.payload)) {
          state.isSigninSuccess = true;
          state.loggedInUser = action.payload;
          state.isError = false;
        } else {
          state.isSigninSuccess = false;
          state.loggedInUser = '';
          state.isError = true;
        }
        state.isLoading = false;
      });
  },
});

export const { logoutUser, clearSignUpSuccess } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
