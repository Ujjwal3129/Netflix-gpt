import React from "react";

import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import {BG_URL} from "../Utils/Constant";

function GptSearch() {
  return(
  <div>
    <div>
        <img
          className="absolute -z-10"
          src={BG_URL}
          alt=""
        />
      </div>
    <GptSearchBar />
    <GptMovieSuggestion />
  </div>
  )
}

export default GptSearch;


