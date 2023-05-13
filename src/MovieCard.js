import React from 'react'
import './MovieCard.css'

const MovieCard = ({poster, title, release, rating, id, getMovieInfo}) => {

  // handleClick = (event, id) => {
  //   event.target = id
  //   console.log(event)
  // }
  return (
    <div className="movie" id={id} onClick={(event) => getMovieInfo(id)}>
      <img className="poster-image" src={poster} alt="movie poster" />
      <div className="movie-card-info">
        <span className="movie-title">{title}</span>
        <span className="movie-release">Release Date: {release}</span>
        <span className="movie-rating">Rating: {rating} 🍌 </span>
      </div>
    </div>
  );
}

export default MovieCard