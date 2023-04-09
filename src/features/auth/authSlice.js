import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
const initialState = {
  email: "",
  role: "",
  isLoading: true,
  isError: false,
  error: "",
};
export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }, thunkApi) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, payload) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.email = action.payload;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});
export default authSlice.reducer;
