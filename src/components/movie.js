import styled from "styled-components";
import { motion } from "framer-motion";
import { loadMovieDetail } from "../actions/detailAction";
import MovieDetail from "./movieDetail";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { movieDetailUrl } from "../api";
import { useState } from "react";
import { useLocation } from "react-router";
const Movie = ({ title, image, id }) => {
  const location = useLocation();
  const locId = location.pathname.split("/")[1];
  console.log(locId);
  if (locId === "popmovie") {
    return (
      <Link
        to={`/popmovie/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <MovieDiv>
          <h3>{title}</h3>
          <img src={image} alt="dsds" />
        </MovieDiv>
      </Link>
    );
  } else if (locId === "upmovie") {
    return (
      <Link
        to={`/upmovie/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <MovieDiv>
          <h3>{title}</h3>
          <img src={image} alt="dsds" />
        </MovieDiv>
      </Link>
    );
  }
};
const MovieDiv = styled(motion.div)`
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  h3 {
    text-decoration: none;
  }
  img {
    height: 50vh;
    width: 75%;
    object-fit: cover;
  }
`;
export default Movie;
