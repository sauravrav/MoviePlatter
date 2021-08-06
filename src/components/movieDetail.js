import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { movieDetailUrl } from "../api";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

const MovieDetail = ({ pathId }) => {
  const location = useLocation();
  const locId = location.pathname.split("/")[1];
  const frontLink = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;
  const history = useHistory();
  const exitDetail = (e) => {
    const element = e.target;
    if (element.classList.contains("shade")) {
      if (locId === "popmovie") {
        history.push("/popmovie");
      }
      if (locId === "upmovie") {
        history.push("/upmovie");
      }
    }
  };
  const [det, setDet] = useState(null);

  const loadMovieDetailHandler = () => {
    axios
      .get(movieDetailUrl(pathId))
      .then((data) => {
        setDet(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadMovieDetailHandler();
  }, [pathId]);
  console.log(det);
  return (
    <CardShadow className="shade" onClick={exitDetail}>
      <InfoPlate>
        <ImageBox>
          {det && <img src={`${frontLink}${det.poster_path}`} alt="" />}
        </ImageBox>
        {det && (
          <InfoBox>
            <h1>{det.title}</h1>
            <h5>
              Genre:
              {det.genres.map((d) => (
                <span>{d.name},</span>
              ))}
            </h5>
            <h5>Popularity:{det.popularity}</h5>
            <h5>Release Date:{det.release_date}</h5>
            <h5>Average Vote:{det.vote_average}</h5>
            <h5>Vote Countr:{det.vote_count}</h5>
            <h5>Budget:{det.budget}</h5>
            <h5>Revenue:{det.revenue}</h5>
            <h5>Run Time:{det.runtime} mins</h5>
            <h6>Status:{det.status}</h6>
            {det.overview}
          </InfoBox>
        )}
      </InfoPlate>
    </CardShadow>
  );
};
const CardShadow = styled(motion.div)`
  background-color: rgba(20, 20, 20, 0.7);
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  padding-left: 15%;
  z-index: 3;
`;
const InfoPlate = styled(motion.div)`
  height: 90vh;
  width: 70%;
  display: flex;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
const ImageBox = styled(motion.div)`
  border: 2px solid white;
  height: 90vh;
  width: 45%;
  img {
    height: 90vh;
    width: 100%;
    object-fit: cover;
    overflow-x: hidden;
    border-radius: 10px;
  }
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
const InfoBox = styled(motion.div)`
  border: 2px solid white;
  height: 90vh;
  width: 55%;
  font-size: 20px;
  background-color: whitesmoke;
  overflow-x: hidden;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  h1,
  h5,
  h6 {
    margin: 10px 0px 0px 0px;
  }
`;
export default MovieDetail;
