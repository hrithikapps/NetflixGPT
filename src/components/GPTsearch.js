import React from "react";
import GPTsearchBar from "./GPTsearchBar";
import GPTmovieSuggestions from "./GPTmovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTsearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="" />
      </div>
      <GPTsearchBar />
      <GPTmovieSuggestions />
    </div>
  );
};

export default GPTsearch;
