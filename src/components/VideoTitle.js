import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-12 absolute bg-gradient-to-r from-black h-screen w-screen aspect-ratio">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="text-md py-6 w-1/4 text-white">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black py-3 px-14 text-md rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white py-3 px-10 text-md rounded-md bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
