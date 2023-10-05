import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieName: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieResults = movieName;
      state.movieName = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
