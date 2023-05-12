import React from 'react'
import './MovieCard.css'

const MovieCard = ({poster, title, release, rating}) => {
  return (
    <section className="movie">
      <img src={poster} alt="movie poster" />
      <h2 className="movie-title">{title}</h2>
      <p className="movie-release">Release Date: {release}</p>
      <p className="movie-rating">Rating: {rating} 🍌 </p>
    </section>
  );
}

export default MovieCard