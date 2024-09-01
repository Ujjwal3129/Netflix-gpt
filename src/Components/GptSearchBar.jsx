import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {BG_URL} from "../Utils/BG_URL";
import lang from "../Utils/languageConstants";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/Constant";
import { addGptMovieResult } from "../Utils/gptSlice";

function GptSearchBar() {
  // search movie in TMDB
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

  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //make an API call to gpt APi and get Movie Result

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, seperated by comma like the example result given ahead. Example Result: Gadar, Sholy, Don, Golmal, Koi Mil Gaya";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      // TODO: Write Error Handling
    }

    console.log(gptResult.choices?.[0]?.message?.content);
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[30%]  md:pt-[8%] flex md:justify-center ml-10">
      <form
        className=" flex w-1/2 
      "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="md:p-4 p-4 m-4  px-8 md:w-[800%]  border bg-transparent bg-black border-white   "
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <input
          onClick={handleGptSearchClick}
          className="md:w-[20%]  m-4 py-2 md:px-3 px-3 rounded-lg text-white bg-red-800"
          type="button"
          value={lang[langKey].search}
        />
      </form>
    </div>
  );
}

export default GptSearchBar;
