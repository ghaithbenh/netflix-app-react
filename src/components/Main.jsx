import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import "./Main.css";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //console.log(movie);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div class="home">
      <div className="container">
        <div className="layer"></div>
        <div className="img-container">
          <img
            className="image"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>
        <div className="info-container">
          <h1 className="title-container">{movie?.title}</h1>
          <div className="button-container">
            <button className="butn1">Play</button>
            <button className="butn2">Watch Later</button>
          </div>
          <p className="Release-container">Released:{movie?.release_date}</p>
          <p className="overview-container">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
