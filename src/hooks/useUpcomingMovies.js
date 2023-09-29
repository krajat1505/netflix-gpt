import { ApiOptions } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies, addUpcomingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      ApiOptions
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovie();
  }, []);
};

export default useUpcomingMovies;
