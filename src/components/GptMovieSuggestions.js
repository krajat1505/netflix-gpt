import React from "react";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieName } = gpt;
  if (!movieName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieName.map((movie) => (
          <movieList
            key={movieName}
            title={movieName}
            movies={movieResults[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
