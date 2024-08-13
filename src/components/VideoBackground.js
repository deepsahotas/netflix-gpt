import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../utils/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen h-screen aspect-ratio"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loop="1"
        controls="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
