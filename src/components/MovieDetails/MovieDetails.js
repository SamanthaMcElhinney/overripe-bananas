import React from "react";
import PropTypes from 'prop-types'
import './MovieDetails.css'

function MovieDetails({ individualMovie, movieTrailer}) {

  return (
      <div className="movie-container">
        <div className="overlay"
          style={{backgroundImage: `url(${individualMovie.movie.backdrop_path})`}}></div>
        <div className="opacity">
          <div className="content">
            <div className="ind-card">
              <img className="ind-poster" src={individualMovie.movie.poster_path} alt={`${individualMovie.movie.title} movie-poster`}/>
            </div>
            <section className="movie-info">
              <h2 className="movie-info-title">{individualMovie.movie.title}</h2>
              <h3 className="movie-tagline">"{individualMovie.movie.tagline}"</h3>
              <p className="movie-overview">{individualMovie.movie.overview}</p>
              <section className="stats">
                <h3 className="stats-title">Movie Stats</h3>
                <p className="revenue">Revenue: ${individualMovie.movie.revenue.toLocaleString("en-US")}</p>
                <p className="budget">Budget: ${individualMovie.movie.budget.toLocaleString("en-US")}</p>
                <p className="runtime">Runtime: {individualMovie.movie.runtime} minutes</p>
              </section>
            <div className="trailer-container">
              <iframe className="trailer" src={`https://www.youtube.com/embed/${movieTrailer.key}`} title="Black Adam - Official Trailer 2" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            </section>
          </div>
        </div>
      </div>
  );
}

export default MovieDetails;

MovieDetails.propTypes = {
  individualMovie: PropTypes.object.isRequired
}