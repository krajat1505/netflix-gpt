import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="margin pt-96 px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex gap-3 ">
        <button className="bg-white text-black p-4 px-10 text-xl rounded-lg hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className="bg-black text-white p-4 px-10 text-xl rounded-lg hover:bg-opacity-80 ">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
