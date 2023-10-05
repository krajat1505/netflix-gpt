import { ApiOptions } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const nowplayingMovies = useSelector(
    (store) => store.movies.nowplayingMovies
  );

  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      ApiOptions
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!nowplayingMovies) getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovie;
