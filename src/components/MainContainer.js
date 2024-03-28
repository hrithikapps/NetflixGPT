import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) {
    return;
  }
  const randomNumber = Math.floor(Math.random() * 19) + 1;
  const mainMovie = movies[randomNumber];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="flex overflow-x-scroll">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
