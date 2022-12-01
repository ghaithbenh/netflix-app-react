import axios from "axios";
import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Row.css";
import { Form } from "react-router-dom";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  const slideLeft = () => {
    var slider = document.getElementById(`slider` + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById(`slider` + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div>
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        <MdChevronLeft onClick={slideLeft} size={40} className="md-iconl" />
        <div id={`slider` + rowID} className="slider-container">
          {movies.map((item, id) => {
            return <Movie key={id} item={item} />;
          })}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className="md-iconr" />
      </div>
    </div>
  );
};

export default Row;
