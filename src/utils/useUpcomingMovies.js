import { useEffect } from 'react';
import { API_OPTIONS } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from './movieSlice';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMoviesFromStore = useSelector(
    (store) => store.movies.upcomingMovies
  );
  const getUpcomingMovie = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?page=1',
      API_OPTIONS
    );
    const movies = await data.json();
    dispatch(addUpcomingMovies(movies?.results));
  };

  useEffect(() => {
    !upcomingMoviesFromStore && getUpcomingMovie();
  }, []);
};

export default useUpcomingMovies;
