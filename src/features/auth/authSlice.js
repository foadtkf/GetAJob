import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  role: "",
  isLoading: true,
  isError: false,
  errorMessage: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
});
export default authSlice.reducer;
