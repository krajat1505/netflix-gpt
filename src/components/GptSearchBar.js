import React, { useRef } from "react";
import lng from "../utils/LanguageCostants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/OpenAi";
import { ApiOptions } from "../utils/Constants";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const lngKey = useSelector((store) => store.config.lng);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      ApiOptions
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //make an api call to gpt api and get movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me name of 5 movies ,  comma separated like the example ahead Example: Gadar, Sholey, Don, Pagal, Goalmaal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovie = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovie.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieName: gptMovie, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%]  md:pt-[20%] flex justify-center ">
      <form
        className=" bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lng[lngKey]?.gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lng[lngKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
