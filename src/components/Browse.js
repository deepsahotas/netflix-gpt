import useNowPlayingMovies from '../utils/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
};

export default Browse;
