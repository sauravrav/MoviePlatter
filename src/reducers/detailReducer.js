const initState = {
  detail: {},
};

export const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIE_DETAIL":
      return { ...state, detail: action.payload.movieDetail };
    default:
      return { ...state };
  }
};
