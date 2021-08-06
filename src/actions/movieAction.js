import axios from "axios";
import { newMovieUrl, popularMovieUrl } from "../api";
export const loadMovies = () => async (dispatch) => {
  const popularMovies = await axios.get(popularMovieUrl);
  const newMovie = await axios.get(newMovieUrl);
  dispatch({
    type: "FETCH_MOVIES",
    payload: { popularMovies: popularMovies.data.results },
  });
  dispatch({
    type: "FETCH_NEW",
    payload: { newMovie: newMovie.data.results },
  });
};
