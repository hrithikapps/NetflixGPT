import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black ">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        {movies?.nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        )}
        {movies?.topRatedMovies && (
          <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} />
        )}
        {movies?.popularMovies && (
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        )}
        {movies?.upcomingMovies && (
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
