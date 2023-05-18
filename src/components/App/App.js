import React, { Component } from "react"
import Form from "../Form/Form"
import Movies from '../Movies/Movies'
import './App.css';
import MovieDetails from "../MovieDetails/MovieDetails";
import Header from "../Header/Header"
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      individualMovie: {},
      filteredMovies: [],

      error: ''
    }
  }

  getMovieInfo = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then((response) => {
      if(!response.ok) {
        this.setState({
          error: "Server error. Our deepest apologizes. We are working on it.",
        });
        // throw Error(response.status)
      } else {
        return response.json()
      }
    })
    .then((data) => {
      this.setState({individualMovie: data, filteredMovies: []})})
  }

  searchMovies = movieTitle => {
    const { movies } = this.state;
    console.log('movies state', {movies})
    // Filter the movies based on the search query
    const searchedMovies = movies.filter(movie =>
        movie.title.toLowerCase().startsWith(movieTitle.toLowerCase())
    );
    
    this.setState({ filteredMovies: searchedMovies});

  };

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((response) => {
      if(!response.ok) {
        throw Error(response.status)
      } else {
        return response.json()
      }
    })
    .then((data) => this.setState({movies: data.movies, individualMovie: {}}))
    .catch(error => this.setState({
      error: `${error}`,
    }))
  }

  render() {
    console.log('on render', this.state.movies)
      return (
        <div>
          <Header error={this.state.error} individualMovie = {this.state.individualMovie}/>
          <Switch>
            <Route exact path='/movies' render={ () => (
            <>
            <Form searchMovies={this.searchMovies}/> 
            <Movies movies={this.state.filteredMovies.length >= 1 ? this.state.filteredMovies : this.state.movies } getMovieInfo = {this.getMovieInfo}/>
            </>
            )} />
            <Route 
              exact path='/movies/:id'
              render={ ( {match} ) => {
            if(this.state.individualMovie.movie?.id === parseInt(match.params.id)) {
              return <MovieDetails  individualMovie= {this.state.individualMovie}/>
            } else {
              this.getMovieInfo(match.params.id)
            }
          }}/>
          </Switch>
        </div>
      )
    }
  }

export default App;
