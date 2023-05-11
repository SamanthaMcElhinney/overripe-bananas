import React from 'react'
import './MovieCard.css'

const MovieCard = ({poster, title, releaseDate, rating}) => {
  return (
    <div className='movie'>
      <img src={poster} alt='movie poster'/>
      <h2>{title}</h2>
      <p>Release Date: {releaseDate}</p>
      <p>🍌 {rating}</p>
    </div>
  )
}

export default MovieCard