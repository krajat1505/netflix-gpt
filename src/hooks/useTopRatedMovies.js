import { ApiOptions } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies, addTopRatedMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      ApiOptions
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovie();
  }, []);
};

export default useTopRatedMovies;
