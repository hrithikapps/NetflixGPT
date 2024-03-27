import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGPTmovieResults } from "../utils/GPTslice";

const GPTsearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGPTsearchClick = async () => {
    console.log("+++", searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      "Only give me results of 5 movies, comma separated like the example results given ahead. Example Result: Sholay, Don , Once upon a time in Mumbai, Interstellar, A beautiful Mind";

    const GPTresults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const GPTmovies = GPTresults.choices?.[0]?.message.content.split(",");
    if (!GPTresults.choices) {
      // Todo : write error handling
    }
    console.log(GPTresults.choices?.[0]?.message.content);

    const promiseArray = GPTmovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = Promise.all(promiseArray);

    dispatch(
      addGPTmovieResults({ movieNames: GPTmovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].GPTsearchBarPlaceholder}
        />
        <button
          onClick={handleGPTsearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg "
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTsearchBar;
