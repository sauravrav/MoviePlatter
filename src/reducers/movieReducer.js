const initState = {
  newMovie: [],
  upComingMovie: [],
  popularMovie: [],
};
export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return { ...state };
      break;

    default:
      return { ...state };
      break;
  }
};
