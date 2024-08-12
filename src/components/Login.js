import { useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };
  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInFrom);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // validate the form data
    const messgae = checkValidData(
      formData.fullName,
      formData.email,
      formData.password
    );
    setErrorMessage(messgae);
    if (messgae) return;

    // signIn/signup here
    if (!isSignInFrom) {
      //sign up logic
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: formData.fullName,
            photoURL:
              'https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png',
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate('/browse');
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          console.log(user);
          alert('Account Created ! Please Sign in Now !');
          setIsSignInFrom(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(setErrorMessage(errorCode + ' - ' + errorMessage));
          navigate('/');
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(setErrorMessage(errorCode + ' - ' + errorMessage));
          navigate('/');
        });
    }
  };
  return (
    <div className="relative flex content-center">
      <div>
        <img
          alt="bgimage"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
        />
      </div>
      <Header />
      <form
        onSubmit={formSubmitHandler}
        className="rounded-md bg-black/85 max-w-md py-12 px-16 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="font-bold text-3xl mb-4">
          {isSignInFrom ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInFrom && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-5 w-full bg-gray-900 rounded-lg"
              onChange={onChangeHandler}
              name="fullName"
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-5 w-full bg-gray-900 rounded-lg"
          onChange={onChangeHandler}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
          onChange={onChangeHandler}
          name="password"
        />
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <button type="submit" className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInFrom ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {!isSignInFrom
            ? 'Already Registered? Sign In Now'
            : 'New to Netflix? Sign Up Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
