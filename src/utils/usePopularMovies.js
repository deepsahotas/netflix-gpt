import { useEffect } from 'react';
import { API_OPTIONS } from './constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from './movieSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovie = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?page=1',
      API_OPTIONS
    );
    const movies = await data.json();
    dispatch(addPopularMovies(movies.results));
  };

  useEffect(() => {
    getPopularMovie();
  }, []);
};

export default usePopularMovies;
