"use client";

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/redux/slice/userSlice";
import chainSlice from "@/redux/slice/chainSlice";
import gasSlice from "@/redux/slice/gasSlice";
import selectorSlice from "@/redux/slice/selectorSlice";
import proofSlice from "@/redux/slice/proofSlice";
import signUpSlice from "@/redux/slice/signUpSlice";
import claimSlice from "@/redux/slice/claimSlice";
import modalSlice from "@/redux/slice/modalSlice";
import transferSlice from "@/redux/slice/transferSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    chain: chainSlice,
    gas: gasSlice,
    selector: selectorSlice,
    proof: proofSlice,
    signup: signUpSlice,
    claim: claimSlice,
    modal: modalSlice,
    transfer: transferSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
