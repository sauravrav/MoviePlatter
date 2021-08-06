const initState = {
  newMovie: [],
  upComingMovie: [],
  popularMovies: [],
};
export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return { ...state, popularMovies: action.payload.popularMovies };
    case "FETCH_NEW":
      return { ...state, newMovie: action.payload.newMovie };
    default:
      return { ...state };
  }
};
