const initState = {
  newMovie: [],
  upComingMovie: [],
  popularMovies: [],
};
export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return { ...state, popularMovies: action.payload.popularMovies };

    default:
      return { ...state };
  }
};
