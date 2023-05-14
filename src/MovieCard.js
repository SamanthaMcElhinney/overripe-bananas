import React from 'react'
import PropTypes from 'prop-types'
import './MovieCard.css'

const MovieCard = ({poster, title, release, rating, id, getMovieInfo}) => {

  const dateValue = new Date(release); // Replace with your actual date value

  const formattedDate = dateValue.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="movie" id={id} onClick={(event) => getMovieInfo(id)}>
      <img className="poster-image" src={poster} alt="movie poster" />
      <div className="movie-card-info">
        <span className="movie-title">{title}</span>
        <span className="movie-release">Release Date: {formattedDate}</span>
        <span className="movie-rating">Rating: {rating} 🍌 </span>
      </div>
    </div>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired, 
  getMovieInfo: PropTypes.func.isRequired
}