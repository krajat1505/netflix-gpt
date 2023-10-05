import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="margin pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-base w-1/3">{overview}</p>
      <div className="my-4 md:m-0 flex  md:gap-3 ">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-black text-white p-4 px-10 text-xl rounded-lg hover:bg-opacity-80 ">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
