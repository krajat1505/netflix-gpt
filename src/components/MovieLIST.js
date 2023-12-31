import React from "react";
import MovieCard from "./MovieCard";

const MovieLIST = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="text-lg md:text-3xl py-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLIST;
