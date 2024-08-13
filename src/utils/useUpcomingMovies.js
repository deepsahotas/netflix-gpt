import { useEffect } from 'react';
import { API_OPTIONS } from './constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from './movieSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovie = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?page=1',
      API_OPTIONS
    );
    const movies = await data.json();
    dispatch(addUpcomingMovies(movies?.results));
  };

  useEffect(() => {
    getUpcomingMovie();
  }, []);
};

export default useUpcomingMovies;
