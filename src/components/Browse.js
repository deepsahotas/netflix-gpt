import useNowPlayingMovies from '../utils/useNowPlayingMovies';
import usePopularMovies from '../utils/usePopularMovies';
import useTopRatedMovies from '../utils/useTopRatedMovies';
import useUpcomingMovies from '../utils/useUpcomingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryComponent from './SecondaryComponent';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryComponent />
    </>
  );
};

export default Browse;
