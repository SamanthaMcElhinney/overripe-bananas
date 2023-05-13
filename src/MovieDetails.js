import React from "react";
import './MovieDetails.css'
function MovieDetails({ individualMovie }) {
  return (
    <div>
      <section className="background-image"
        style={{
          backgroundImage: `url(${individualMovie.movie.backdrop_path})`,
        //   zIndex: "-1",
        }}
      >
        <div className="ind-card" style={{opacity:'1.0'}}>
          <img className="ind-poster" src={individualMovie.movie.poster_path} />
        </div>
        <h1 className="detail-title">{individualMovie.movie.title}</h1>
        <section>
          <p className="movie-overview">{individualMovie.movie.overview}</p>
          <ul className="detail-list">
            <li>
              Revenue: ${individualMovie.movie.revenue.toLocaleString("en-US")}
            </li>
            <li>
              Budget: ${individualMovie.movie.budget.toLocaleString("en-US")}
            </li>
            <li>Runtime: {individualMovie.movie.runtime} minutes</li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default MovieDetails;