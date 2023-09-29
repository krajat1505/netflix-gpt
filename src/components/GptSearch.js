import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { netflixBackground } from "../utils/Constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={netflixBackground} alt="Neflix" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
