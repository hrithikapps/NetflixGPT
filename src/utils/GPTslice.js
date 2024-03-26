import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
  name: "gpt",
  initialState: {
    ToggleGPTsearchView: false,
  },

  reducers: {
    toggleGPTsearch: (state) => {
      state.ToggleGPTsearchView = !state.ToggleGPTsearchView;
    },
  },
});

export const { toggleGPTsearch } = GPTslice.actions;

export default GPTslice.reducer;
