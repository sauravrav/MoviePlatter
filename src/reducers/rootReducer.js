import { combineReducers } from "redux";
import { detailReducer } from "./detailReducer";
import { movieReducer } from "./movieReducer";
const rootReducer = combineReducers({
  movies: movieReducer,
  details: detailReducer,
});
export default rootReducer;
