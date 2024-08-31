import React from "react";
import { useSelector } from "react-redux";
// import {BG_URL} from "../Utils/BG_URL";
import lang from "../Utils/languageConstants";

function GptSearchBar() {
  const langKey = useSelector((store) => store.config.lang)
  return (
    <div className="pt-[8%] flex justify-center ">
      <form className=" flex w-1/2 
      ">
        <input
          className="p-4 m-4 w-[80%] border bg-transparent bg-black border-white   "
          type="text"
          placeholder=
          {lang[langKey].gptSearchPlaceholder}
        />
        <input
          className="w-[20%] m-4 py-2 px-3 rounded-lg text-white bg-red-800"
          type="button"
          value={lang[langKey].search}
        />
      </form>

      
    </div>
  );
}

export default GptSearchBar;
