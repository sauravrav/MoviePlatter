import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/movieAction";
import Movie from "../components/movie";
import MovieDetail from "../components/movieDetail";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { loadMovieDetail } from "../actions/detailAction";
import { pageAnimation } from "../v-components/animation";
const Upcoming = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);
  // console.log(movieDetailUrl(pathId));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);
  const movies = useSelector((state) => state.movies);
  const frontLink = `https://www.themoviedb.org/t/p/w220_and_h330_bestv2`;
  return (
    <div style={{ backgroundColor: "white" }}>
      <h2>Upcoming Movies</h2>
      <MovieList
        variants={pageAnimation}
        animate="show"
        initial="hidden"
        exit="exit"
      >
        {movies.newMovie.map((data) => (
          <Movie
            title={data.title}
            image={`${frontLink}${data.poster_path}`}
            id={data.id}
            key={data.id}
          />
        ))}
      </MovieList>
      {pathId && <MovieDetail pathId={pathId} />}
    </div>
  );
};
const MovieList = styled(motion.div)`
  padding: 0rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;
export default Upcoming;
