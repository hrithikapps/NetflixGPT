import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useVideoTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieData = async () => {
    const movieData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await movieData.json();
    const filterData = data.results?.filter((data) => {
      return data.type === "Trailer";
    });
    const trailer = filterData.length ? filterData[0] : data[0];
    dispatch(addTrailerVideo(trailer));
    console.log(trailer);
  };

  useState(() => {
    getMovieData();
  }, []);
};

export default useVideoTrailer;
