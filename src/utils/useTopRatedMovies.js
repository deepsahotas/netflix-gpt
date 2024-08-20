import { useEffect } from 'react';
import { API_OPTIONS } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from './movieSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMoviesFromStore = useSelector(
    (store) => store.movies.topRatedMovies
  );
  const getTopRatedMovie = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_OPTIONS
    );
    const movies = await data.json();
    dispatch(addTopRatedMovies(movies?.results));
  };

  useEffect(() => {
    !topRatedMoviesFromStore && getTopRatedMovie();
  }, []);
};

export default useTopRatedMovies;
