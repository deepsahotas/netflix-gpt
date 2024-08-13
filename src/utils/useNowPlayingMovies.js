import { useEffect } from 'react';
import { API_OPTIONS } from './constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from './movieSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
    );
    const movies = await data.json();
    dispatch(addNowPlayingMovies(movies.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
