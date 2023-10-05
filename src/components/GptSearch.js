import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { netflixBackground } from "../utils/Constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={netflixBackground}
          alt="Neflix"
        />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
