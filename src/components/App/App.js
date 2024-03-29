import React, { Component } from "react"
import Form from "../Form/Form"
import Movies from '../Movies/Movies'
import './App.css';
import MovieDetails from "../MovieDetails/MovieDetails"
import Header from "../Header/Header"
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      individualMovie: {},
      filteredMovies: [],
      movieTrailer: [],
      error: "",
      searchError: "",
    };
  }

  clearIndividualMovie = () => {
    this.setState({individualMovie:{}})
  }

  getMovieInfo = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
        throw new Error(response.status);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        this.setState({ individualMovie: data, filteredMovies: [], error:"", searchError:""});
      })
      .catch((error) =>
        this.setState({
          error: `${error} Sorry we've slipped on a 🍌. We're working on getting back up and running`,
        })
      );
  };

  getMovieTrailer = (id) => {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
  .then((response) => {
    if(!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
  .then((data) => {
        this.setState({ movieTrailer: data.videos.find(video => video.type === 'Trailer')})
      })
      .catch((error) => 
        this.setState({
          error: `${error} Sorry we've slipped on a 🍌. We're working on getting back up and running` 
        })
      )
    }

  searchMovies = (movieTitle) => {
    const { movies } = this.state;
    const searchedMovies = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(movieTitle.toLowerCase())
    );
    this.setState({ filteredMovies: searchedMovies });

    if (!searchedMovies.length) {
      this.setState({
        searchError: (
          <h3
            style={{ color: "#fede59", fontSize: "large", textAlign: "center" }}
          >
            No movies found. Please try again
          </h3>
        ),
      });
    } else {
      this.setState({ searchError: "" });
    }
  };

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.status);
        } else {
          return response.json();
        }
      })
      .then((data) =>
        this.setState({ movies: data.movies, individualMovie: {} })
      )
      .catch((error) =>
        this.setState({
          error: `${error} Sorry we've slipped on a 🍌. We're working on getting back up and running`,
        })
      );
  }

  render() {
    const { movies } = this.state
    return (
      <div>
        <Header individualMovie={this.state.individualMovie} clearIndividualMovie={this.clearIndividualMovie}/>
        {this.state.error && <p className="error-handling">{this.state.error}</p>}
        {this.state.searchError && <p className="search-error-handling">{this.state.searchError}</p>}
        <Switch>
          <Route
            exact
            path="/movies/:id"
            render={({ match }) => {
              if (this.state.individualMovie.movie?.id === parseInt(match.params.id)) {
                  return (
                    <MovieDetails individualMovie={this.state.individualMovie} movieTrailer={this.state.movieTrailer} />
                    );
                  } else {
                    this.getMovieInfo(match.params.id);
                    this.getMovieTrailer(match.params.id)
                  }
                }}/>
                <Route
                  exact path="/" render={() => (
                    <>
                      <Form searchMovies={this.searchMovies} />
                      <Movies
                        movies={this.state.movies} 
                        filteredMovies={this.state.filteredMovies}
                        getMovieInfo={this.getMovieInfo}
                      />
                    </>
                  )}
                />
        </Switch>
      </div>
    )
  }
}

export default App;
