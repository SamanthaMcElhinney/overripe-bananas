import React, {useEffect, useState } from "react";
import PropTypes from 'prop-types'
import './MovieDetails.css'

function MovieDetails({ individualMovie}) {
  const[trailer, setTrailer] = useState('')

  useEffect(() => {
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${individualMovie.movie.id}/videos`
    )
      .then((response) => response.json())
      .then((data) => {
        const trailerVideo = data.videos.find(
          (video) => video.type === "Trailer"
        );
        setTrailer(trailerVideo);
      })
      .catch((error) => {
        console.error("Error fetching trailer:", error);
      });
  }, [individualMovie.movie.id]);

  return (
    <div className="movie-container">
      <div
        className="overlay"
        style={{
          backgroundImage: `url(${individualMovie.movie.backdrop_path})`,
        }}
      ></div>
      <div className="opacity">
        <div className="content">
          <div className="ind-card">
            <img
              className="ind-poster"
              src={individualMovie.movie.poster_path}
              alt={`${individualMovie.movie.title} movie-poster`}
            />
          </div>
          <section className="movie-info">
            <h2 className="movie-info-title">{individualMovie.movie.title}</h2>
            <h3 className="movie-tagline">"{individualMovie.movie.tagline}"</h3>
            <p className="movie-overview">{individualMovie.movie.overview}</p>
            <section className="stats">
              <h3>
                Revenue: $
                {individualMovie.movie.revenue.toLocaleString("en-US")}
              </h3>
              <h3>
                Budget: ${individualMovie.movie.budget.toLocaleString("en-US")}
              </h3>
              <h3>Runtime: {individualMovie.movie.runtime} minutes</h3>
            </section>
            {trailer && (
              <iframe
                width="600"
                className="trailer-video"
                title="Movie Trailer"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                allowFullScreen
              />
            )}
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