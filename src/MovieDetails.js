import React from "react";
import './MovieDetails.css'
function MovieDetails({ individualMovie }) {
  return (
      <section className="movie-details"
        style={{backgroundImage: `url(${individualMovie.movie.backdrop_path})`}}>
        {/* <h1 className="movie-title">{individualMovie.movie.title}</h1> */}
        <div className="ind-card" style={{opacity:'1.0'}}>
          <img className="ind-poster" src={individualMovie.movie.poster_path} />
        </div>
        <section className="movie-info">
          <h2 className="movie-info-title">OVERVIEW</h2>
          <p className="movie-overview">{individualMovie.movie.overview}</p>

          <ul className="detail-list">
            <li>Revenue: ${individualMovie.movie.revenue.toLocaleString("en-US")}</li>
            <li>Budget: ${individualMovie.movie.budget.toLocaleString("en-US")}</li>
            <li>Runtime: {individualMovie.movie.runtime} minutes</li>
          </ul>
        </section>
      </section>
  );
}

export default MovieDetails;