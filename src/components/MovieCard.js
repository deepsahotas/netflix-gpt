import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ movie }) => {
  const { poster_path, original_title } = movie;
  return (
    <div className="w-40">
      <img src={`${IMG_CDN}${poster_path}`} alt={original_title} />
    </div>
  );
};

export default MovieCard;
