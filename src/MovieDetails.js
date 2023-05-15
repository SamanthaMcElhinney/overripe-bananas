import React from "react";
import PropTypes from 'prop-types'
import './MovieDetails.css'





function MovieDetails({ individualMovie }) {
  return (
      // <section className="movie-details"
        // style={{backgroundImage: `url(${individualMovie.movie.backdrop_path})`}}>
      //   <div className="ind-card" style={{opacity:'1.0'}}>
      //     <img className="ind-poster" src={individualMovie.movie.poster_path} />
      //   </div>
      //   <section className="movie-info">
      //     <h2 className="movie-info-title">OVERVIEW</h2>
      //     <p className="movie-overview">{individualMovie.movie.overview}</p>

      //     <ul className="detail-list">
      //       <li>Revenue: ${individualMovie.movie.revenue.toLocaleString("en-US")}</li>
      //       <li>Budget: ${individualMovie.movie.budget.toLocaleString("en-US")}</li>
      //       <li>Runtime: {individualMovie.movie.runtime} minutes</li>
      //     </ul>
      //   </section>
      // </section>
      <div className="movie-container">
        <div className="overlay"
          style={{backgroundImage: `url(${individualMovie.movie.backdrop_path})`}}></div>
        <div className="opacity">
          <div className="content">
            <div className="ind-card">
              <img className="ind-poster" src={individualMovie.movie.poster_path} alt="movie-poster"/>
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
          </div>

        </div>
      </div>
  );


}

export default MovieDetails;

MovieDetails.propTypes = {
  individualMovie: PropTypes.object.isRequired
}