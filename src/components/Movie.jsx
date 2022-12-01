import "./Row.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { useState } from "react";
const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="movies-container">
      <img
        className="movies-image-container"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="imgs">
        <p className="img-title">{item?.title}</p>
        <p>
          {like ? (
            <FaHeart className="fah-icon" />
          ) : (
            <FaRegHeart className="far-icon" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
