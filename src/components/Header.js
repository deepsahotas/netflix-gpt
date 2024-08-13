import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { logo, USER_AVATAR } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.\
      })
      .catch((error) => {
        // An error happened.
      });
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
    <header className="z-10 w-full absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={logo} alt="netflix logo" />
      {user && (
        <div className="flex p-2 items-center">
          {/* {user?.displayName && (
            <span className="text-white">{user?.displayName}</span>
          )} */}

          <img
            className="w-9 h-9"
            alt="user icon"
            src={user?.photoURL ? user?.photoURL : USER_AVATAR}
          />
          <button onClick={handleSignout} className="text-white ml-3">
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
