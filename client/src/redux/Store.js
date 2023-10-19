import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import gigReducer from "./slices/NewGigSlice";
import chatReducer from "./slices/ChatSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    gig: gigReducer,
    chat: chatReducer,
  },
});
