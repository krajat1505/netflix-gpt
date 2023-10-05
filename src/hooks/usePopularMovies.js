import { ApiOptions } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const PopularMovies = useSelector((store) => store.addPopularMovies);

  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      ApiOptions
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !PopularMovies && getPopularMovie();
  }, []);
};

export default usePopularMovies;
