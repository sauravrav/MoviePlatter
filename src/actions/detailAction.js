import axios from "axios";
import { movieDetailUrl } from "../api";
import { useLocation } from "react-router";
export const loadMovieDetail = (id) => async (dispatch) => {
  const movieDetail = await axios.get(movieDetailUrl(id));
  dispatch({
    type: "GET_MOVIE_DETAIL",
    payload: { movieDetail: movieDetail },
  });
};
