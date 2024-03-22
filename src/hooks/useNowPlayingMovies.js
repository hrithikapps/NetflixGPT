import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const movieData = await data.json();
    dispatch(addNowPlayingMovies(movieData.results));
  };

  useEffect(() => {
    getNowPlayingMoviesData();
  }, []);
};

export default useNowPlayingMovies;
