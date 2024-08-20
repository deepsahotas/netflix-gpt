import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 md:pt-60 px-8 md:px-12 absolute bg-gradient-to-r from-black h-screen w-screen aspect-ratio">
      <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
      <p className="text-md py-6 w-4/4 md:w-1/4 text-white">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black py-2 px-8 md:py-3 md:px-14 text-md rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-8 md:py-3 md:px-10 text-md rounded-md bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
