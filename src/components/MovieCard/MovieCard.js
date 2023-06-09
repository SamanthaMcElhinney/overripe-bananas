import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";
import overripe from "../../assets/overripe.png";
import ripe from "../../assets/ripe.png";
import underripe from "../../assets/underripe.png";
import { Link } from "react-router-dom";

const MovieCard = ({ poster, title, release, rating, id }) => {
  let banana;

  const dateValue = new Date(release);

  const formattedDate = dateValue.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  if (rating <= 3) {
    banana = overripe;
  } else if (rating >= 4 && rating <= 6) {
    banana = ripe;
  } else if (rating >= 7) banana = underripe;

  return (
    <Link key={id} to={`/movies/${id}`} style={{ textDecoration:"none"}}>
      <div className="movie" id={id}>
        <img
          className="poster-image"
          src={poster}
          alt={`${title}: Movie Poster`}
        />
        <div className="movie-card-info">
          <span className="movie-title">{title}</span>
          <span className="movie-release">Release Date: {formattedDate}</span>
          <div className="rating-container">
            <span className="movie-rating">Rating: {rating}</span>
            <img src={banana} alt="banana" className="overripe-banana"></img>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  getMovieInfo: PropTypes.func.isRequired,
};
