import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from "prop-types";
import "./Movies.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowBack from "../../assets/right-arrow.png";
import ArrowForward from "../../assets/left-arrow.png";

const responsive = {
  0: {
    items: 1,
  },
  568: {
    items: 2,
  },
  1024: {
    items: 4,
    itemsFit: "contain",
  },
  1840: {
    items: 6,
    itemsFit: "contain",
  },
};

function Movies({ movies, getMovieInfo, filteredMovies }) {
  const moviesToRender = filteredMovies.length > 0 ? filteredMovies : movies;
  const movieCards = moviesToRender.map((movie) => (
    <div className="item" data-value={movie.id} key={movie.id}>
      <MovieCard
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        release={movie.release_date}
        rating={movie.average_rating}
        getMovieInfo={getMovieInfo}
      />
    </div>
  ));

  const renderNextButton = () => {
    return (
      <div style={{ position: "absolute", right: 0, top: 0 }}>
        <img
          src={ArrowBack}
          alt="Next"
          style={{ width: "20px", height: "60px", width: "60px" }}
        />
      </div>
    );
  };

  const renderPrevButton = () => {
    return (
      <div style={{ position: "absolute", left: 0, top: 0 }}>
        <img
          src={ArrowForward}
          alt="Previous"
          style={{ width: "20px", height: "60px", width: "60px" }}
        />
      </div>
    );
  };

  return (
    <div className="movies-container">
      <AliceCarousel
        mouseTracking
        items={movieCards}
        responsive={responsive}
        keyboardNavigation={true}
        controlsStrategy="alternate"
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        autoPlay={true}
        autoPlayInterval={3000}
      />
    </div>
  );
}

export default Movies;

Movies.propTypes = {
  movies: PropTypes.array,
  getMovieInfo: PropTypes.func.isRequired,
};
