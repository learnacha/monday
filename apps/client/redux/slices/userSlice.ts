import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
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

/* Creating an async thunk that will be used to add a user to the users array. */
export const addUserAsync = createAsyncThunk(
  'user/addUserAsync',
  async (user: string) => {
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: user,
    });
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
    loginUser: (state, action: PayloadAction<string>) => {
      if (state.users.includes(action.payload)) {
        state.isSigninSuccess = true;
        state.loggedInUser = action.payload;
        state.isError = false;
      } else {
        state.isSigninSuccess = false;
        state.loggedInUser = '';
        state.isError = true;
      }
    },
    addUser: (state, action: PayloadAction<string>) => {
      state.users.push(action.payload);
      state.isError = false;
      state.isSignupSuccess = true;
      state.isLoading = false;
    },
    clearSignUpSuccess: (state) => {
      state.isSignupSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUserAsync.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { addUser, loginUser, logoutUser, clearSignUpSuccess } =
  userSlice.actions;

export const selectLoggedInUser = (state: RootState) => state.user.loggedInUser;
export const selectIsSigninSuccess = (state: RootState) =>
  state.user.isSigninSuccess;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectHasUserError = (state: RootState) => state.user.isError;
export const selectIsSignupSuccess = (state: RootState) =>
  state.user.isSignupSuccess;

export default userSlice.reducer;
