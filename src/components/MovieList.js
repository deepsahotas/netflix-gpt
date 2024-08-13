import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h1 className="text-lg py-5 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies &&
            movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
