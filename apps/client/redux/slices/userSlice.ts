import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store/store';

interface UserState {
  users: string[];
  isLoggedIn: boolean;
  loggedInUser: string;
  isError: boolean;
  isLoading: boolean;
  isSignupSuccess: boolean;
}

/* Setting the initial state of the user slice. */
const initialState: UserState = {
  users: [],
  isLoggedIn: false,
  loggedInUser: '',
  isError: false,
  isLoading: false,
  isSignupSuccess: false,
};

/* Creating an async thunk that will be used to add a user to the users array. */
export const addUserAsync = createAsyncThunk(
  'user/addUserAsync',
  async (user: string) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      {
        name: user,
      }
    );
    return response.data;
  }
);

/* Creating a slice of the Redux store. */
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.loggedInUser = '';
      state.isError = false;
    },
    loginUser: (state, action: PayloadAction<string>) => {
      console.log(action.payload);

      if (state.users.includes(action.payload)) {
        state.isLoggedIn = true;
        state.loggedInUser = action.payload;
        state.isError = false;
      } else {
        state.isLoggedIn = false;
        state.loggedInUser = '';
        state.isError = true;
      }
    },
    clearError: (state) => {
      state.isError = false;
    },
    addUser: (state, action: PayloadAction<string>) => {
      state.users.push(action.payload);
      state.isError = false;
      state.isSignupSuccess = true;
    },
    clearSignUpSuccess: (state) => {
      state.isSignupSuccess = false;
      console.log(state.isSignupSuccess);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addUserAsync.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  addUser,
  loginUser,
  logoutUser,
  clearError,
  clearSignUpSuccess,
} = userSlice.actions;

export const selectLoggedInUser = (state: RootState) => state.user.loggedInUser;
export const selectIsUserLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectHasUserError = (state: RootState) => state.user.isError;
export const selectIsSignupSuccess = (state: RootState) =>
  state.user.isSignupSuccess;
export const resetSignupSuccess = (state: RootState) =>
  state.user.isSignupSuccess;
export default userSlice.reducer;
