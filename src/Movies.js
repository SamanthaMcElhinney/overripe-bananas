import React from 'react'
import MovieCard from './MovieCard'
import './Movies.css'

function Movies({movies}) {

  const movieCards = movies.map(movie => {
    return (
      <MovieCard 
        id={movie.id}
        key={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        release={movie.release_date}
        rating={movie.average_rating}
      />
    )
  })

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}


export default Movies