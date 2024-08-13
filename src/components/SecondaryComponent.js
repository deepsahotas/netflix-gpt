import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className="bg-gray-900">
      <div className="px-8 -mt-40 z-20 relative">
        <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
        <MovieList title={'Top Rated'} movies={movies?.topRatedMovies} />
        <MovieList title={'Upcoming'} movies={movies?.upcomingMovies} />
        <MovieList title={'Popular'} movies={movies?.popularMovies} />
        <MovieList title={'Horror'} movies={movies?.nowPlayingMovies} />
        <MovieList title={'Comedy'} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
