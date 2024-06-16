import { createSlice } from "@reduxjs/toolkit";

const claimSlice = createSlice({
  name: "claim",

  initialState: {
    step: 0,
    claimDrawer: false,
    deployProof: null,
    isLoading: false,
    isRequesting: false,
  },

  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    toggleClaimDrawer: (state) => {
      state.claimDrawer = !state.claimDrawer;
    },
    setDeployProof: (state, action) => {
      state.deployProof = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsRequesting: (state, action) => {
      state.isRequesting = action.payload;
    },
  },
});

export const {
  setStep,
  toggleClaimDrawer,
  setDeployProof,
  setIsLoading,
  setIsRequesting,
} = claimSlice.actions;

export default claimSlice.reducer;
