import React from 'react'
import './MovieCard.css'

const MovieCard = ({poster, title, release, rating}) => {
  return (
    <section className='movie'>
      <img src={poster} alt='movie poster'/>
      <h2 className='movie-title'>{title}</h2>
      <p>Release Date: {release}</p>
      <p>Rating: 🍌 {rating}</p>
    </section>
  )
}

export default MovieCard