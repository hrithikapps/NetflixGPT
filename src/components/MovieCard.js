import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 px-6">
      <img src={`${IMG_CDN_URL}${posterPath}`} alt="MovieImg" />
    </div>
  );
};

export default MovieCard;
