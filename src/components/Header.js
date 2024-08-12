import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };
  return (
    <header className="w-full absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix logo"
      />
      {user && (
        <div className="flex p-2 items-center">
          <span>{user?.displayName}</span>
          <img
            className="w-9 h-9"
            alt="user icon"
            src={
              user?.photoURL
                ? user?.photoURL
                : 'https://occ-0-3213-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
            }
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
