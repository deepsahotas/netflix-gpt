import React from 'react';
import GptSearchBar from './GptSearchBar';
import { BG_IMAGE } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className="relative">
      <GptSearchBar />
      <div className="absolute -z-10 top-0">
        <img
          alt="bgimage"
          className="h-screen md:h-auto object-cover"
          src={BG_IMAGE}
        />
      </div>
    </div>
  );
};

export default GptSearch;
