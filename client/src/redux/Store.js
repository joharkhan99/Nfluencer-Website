import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import gigReducer from "./slices/NewGigSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    gig: gigReducer,
  },
});
