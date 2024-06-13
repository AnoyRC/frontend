"use client";

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/redux/slice/userSlice";
import chainSlice from "@/redux/slice/chainSlice";
import gasSlice from "@/redux/slice/gasSlice";
import selectorSlice from "@/redux/slice/selectorSlice";
import proofSlice from "@/redux/slice/proofSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    chain: chainSlice,
    gas: gasSlice,
    selector: selectorSlice,
    proof: proofSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
