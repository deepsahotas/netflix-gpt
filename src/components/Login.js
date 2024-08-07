import { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInFrom);
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
      <form className="rounded-md bg-black/85 max-w-md py-12 px-16 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-3xl mb-4">
          {isSignInFrom ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-5 w-full bg-gray-900 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-5 w-full bg-gray-900 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
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
