import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  walletAddress: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setWalletAddress(state, action) {
      state.walletAddress = action.payload;
    },
  },
});

export const { setUser, setWalletAddress } = userSlice.actions;
export default userSlice.reducer;
