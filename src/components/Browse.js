import useNowPlayingMovies from '../utils/useNowPlayingMovies';
import usePopularMovies from '../utils/usePopularMovies';
import useTopRatedMovies from '../utils/useTopRatedMovies';
import useUpcomingMovies from '../utils/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryComponent from './SecondaryComponent';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryComponent />
        </>
      )}
    </>
  );
};

export default Browse;
