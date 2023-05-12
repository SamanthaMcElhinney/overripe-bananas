import React from 'react'
import './MovieCard.css'

const MovieCard = ({poster, title, release, rating}) => {
  return (
    <div className="movie">
      <img className="poster-image" src={poster} alt="movie poster" />
      <div className="movie-card-info">
        <span className="movie-title">{title}</span>
        <span className="movie-release">Release Date: {release}</span>
        <span className="movie-rating">Rating: {rating} 🍌 </span>
      </div>
    </div>
    // <section className="movie">
    //   <img src={poster} alt="movie poster" />
    //   <h2 className="movie-title">{title}</h2>
    //   <p className="movie-release">Release Date: {release}</p>
    //   <p className="movie-rating">Rating: {rating} 🍌 </p>
    // </section>
  );
}

export default MovieCard