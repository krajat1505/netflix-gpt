import React from "react";
import lng from "../utils/LanguageCostants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lngKey = useSelector((store) => store.config.lng);

  return (
    <div className="pt-[20%] flex justify-center ">
      <form className=" bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lng[lngKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lng[lngKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
