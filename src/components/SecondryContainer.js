import React from "react";
import MovieLIST from "./MovieLIST";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black text-white ">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieLIST title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieLIST
          title={"Upcoming Movies"}
          movies={movies.addUpcomingMovies}
        />
        <MovieLIST title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieLIST title={"Top Rated"} movies={movies.addTopRatedMovies} />
        <MovieLIST title={"Popular"} movies={movies.addPopularMovies} />
      </div>
    </div>
  );
};

export default SecondryContainer;
