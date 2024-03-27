import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
  name: "gpt",
  initialState: {
    ToggleGPTsearchView: false,
    movieResults: null,
    movieNames: null,
  },

  reducers: {
    toggleGPTsearch: (state) => {
      state.ToggleGPTsearchView = !state.ToggleGPTsearchView;
    },
    addGPTmovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGPTsearch, addGPTmovieResults } = GPTslice.actions;

export default GPTslice.reducer;
