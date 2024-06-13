"use client";

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/redux/slice/userSlice";
import chainSlice from "@/redux/slice/chainSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    chain: chainSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
