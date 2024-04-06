import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  isOpen: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    inc(state, action) {
      state.step += action.payload;
    },
    dec(state, action) {
      state.step -= action.payload;
    },
    setOpen(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { inc, dec, setOpen } = uiSlice.actions;

export default uiSlice.reducer;
