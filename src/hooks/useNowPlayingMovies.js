import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMoviesData();
  }, []);

  const getNowPlayingMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const movieData = await data.json();
    console.log("movieData", movieData.results);
    dispatch(addNowPlayingMovies(movieData.results));
  };
};

export default useNowPlayingMovies;
