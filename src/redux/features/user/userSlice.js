import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../../utils/firebase.config';

const initialState = {
  name: '',
  email: '',
  isLoading: true,
  isError: false,
  error: '',
};

export const createUser = createAsyncThunk(
  'userSlice/createUser',
  async ({ email, name, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name
    })
    console.log(data)
    return {
      email: data.user.email,
      name: data.user.displayName
    };
  }
);

export const logInUser = createAsyncThunk(
  'userSlice/logInUser',
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(data);
    return;
  }
);

export const googleLogIn = createAsyncThunk(
  'userSlice/googleLogIn',
  async () => {
    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, provider);
    console.log(data)
    return {
      email: data.user.email,
      name: data.user.displayName
    };
  }
)

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    logout: (state) => {
      signOut(auth);
      state.name = "";
      state.email = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.email = '';
        state.name = '';
        state.error = '';
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.email = payload.email;
        state.name = payload.name;
        state.error = '';
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.email = '';
        state.name = '';
        state.error = action.error.message;
      })
  }
});
export const { setUser, toggleLoading, logout } = userSlice.actions;

export default userSlice.reducer;
