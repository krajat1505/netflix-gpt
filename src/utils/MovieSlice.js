import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.addUpcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.addTopRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
