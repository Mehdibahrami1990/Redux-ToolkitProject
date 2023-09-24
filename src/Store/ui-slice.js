import { createSlice } from "@reduxjs/toolkit";

const initViksible = { cartIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initViksible,

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
