
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase";

// --- Thunks ---
export const signUpUser = createAsyncThunk(
  "auth/signupUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
  await signOut(auth);
  return null;
});

// --- Slice ---
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    token: null,   // YouTube OAuth token
    loading: false,
    error: null,
  },
  reducers: {
    
    setUser:(state ,action)=>{
        state.user =action.payload;
    },
     clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => { state.loading = true; })
      .addCase(signUpUser.fulfilled, (state, action) => { state.loading = false; state.user = action.payload; })
      .addCase(signUpUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

      .addCase(signInUser.pending, (state) => { state.loading = true; })
      .addCase(signInUser.fulfilled, (state, action) => { state.loading = false; state.user = action.payload; })
      .addCase(signInUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

      .addCase(googleLogin.pending, (state) => { state.loading = true; })
      .addCase(googleLogin.fulfilled, (state, action) => { state.loading = false; state.user = action.payload; })
      .addCase(googleLogin.rejected, (state, action) => { state.loading = false; state.error = action.payload; })

      .addCase(logOutUser.fulfilled, (state) => { state.user = null; state.token = null; });
  },
});

export const {setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;
