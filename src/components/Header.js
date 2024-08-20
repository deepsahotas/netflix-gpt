import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { logo, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log(showGptSearch);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.\
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <header className="z-10 w-full absolute px-1 py-2 md:px-8 bg-gradient-to-b from-black flex flex-col-reverse md:flex-row justify-between items-center md:items-left">
      <img className="w-44" src={logo} alt="netflix logo" />
      {user && (
        <div className="flex p-2 items-center">
          {/* {user?.displayName && (
            <span className="text-white">{user?.displayName}</span>
          )} */}
          <button
            onClick={handleGPTSearchClick}
            className="py-1 px-4 bg-purple-800 text-white mr-3 text-xs md:text-base rounded-md"
          >
            {showGptSearch ? 'Back to Movies' : 'GPT Search'}
          </button>
          <img
            className="w-9 h-9 rounded-xl"
            alt="user icon"
            src={user?.photoURL ? user?.photoURL : USER_AVATAR}
          />
          <button
            onClick={handleSignout}
            className="text-white ml-3 mr-3 text-xs md:text-base"
          >
            Sign Out
          </button>
          {showGptSearch && (
            <select
              className="bg-black text-white py-1 px-3 border focus:outline-none text-xs md:text-base"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
