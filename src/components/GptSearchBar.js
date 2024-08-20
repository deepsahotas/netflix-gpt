import React, { useRef } from 'react';
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';
import openAI from '../utils/openAI';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const handleGptSearchClick = async () => {
    const gptQuery =
      'Act as a movie recommendation system and suggest some movies for the query: ' +
      searchText.current.value +
      '.only give me names of 5 movies, comma seprated like the example result given ahead. Example Result: Gadar, Sholey, Don, Golmaal, Koi Mil gya';
    const gptResults = await openAI.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices);
  };
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <form
          className="w-screen md:w-1/2 p-4 flex bg-black bg-opacity-70"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="p-4 w-3/4 rounded-l-lg focus:outline-none"
            placeholder={lang[langKey].gptSearchPlaceholder}
            type="text"
            ref={searchText}
          />
          <button
            type="submit"
            onClick={handleGptSearchClick}
            className="w-1/4 py-4 text-xl bg-red-800 text-white rounded-r-lg"
          >
            {lang[langKey].search}
          </button>
          {/* <p className="text-white text-center text-sm mt-3">
            By messaging ChatGPT, you agree to our Terms and have read our
            Privacy Policy.
          </p> */}
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
