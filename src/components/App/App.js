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
      error: ''
    }
  }

  getMovieInfo = (id) => {
    console.log('id', id)
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
      console.log('data', data)
      this.setState({individualMovie: data})})
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((response) => {
      if(!response.ok) {
        this.setState({
          error: "Server error. Our deepest apologizes. We are working on it.",
        });
        throw Error(response.status)
      } else {
        return response.json()
      }
    })
    .then((data) => this.setState({movies: data.movies, individualMovie: {}}))
    .catch(error => alert(`error at ${error}`))
  }

  render() {
      return (
        <div>
          <Header error={this.state.error} individualMovie = {this.state.individualMovie}/>
          <Switch>
            <Route exact path='/Movies' render={ () => (
            <>
            <Form /> 
            <Movies movies={this.state.movies} getMovieInfo = {this.getMovieInfo}/>
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
