import { useEffect } from 'react';
import { addTrailerVideo } from './movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from './constants';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerMoviesFromStore = useSelector(
    (store) => store.movies.trailerVideo
  );
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const response = await data.json();
    const filterData = response.results?.filter(
      (video) => video.type === 'Trailer'
    );
    const trailer = filterData.length ? filterData[0] : response.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerMoviesFromStore && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
