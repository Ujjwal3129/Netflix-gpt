import React from "react";

import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../Utils/Constant";

function GptSearch() {
  return (
    <>
    <div className="fixed  -z-10">
      <img className=" md:w-screen h-screen object-cover" src={BG_URL} alt="" />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      
    </div>
    </>
  );
}

export default GptSearch;
