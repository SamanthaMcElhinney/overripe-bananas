import React, { Component } from "react"
import Form from "../Form/Form"
import Movies from '../Movies/Movies'
import './App.css';
import banana from "../../assets/banana.png"
import MovieDetails from "../MovieDetails/MovieDetails";
import Header from "../Header/Header"
import { Route, Link } from 'react-router-dom'



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
    .then((data) => this.setState({individualMovie: data}))
  }

  displayHome = () => {
    this.setState({individualMovie: {}})
  }

// getMovieTrailer = (id) => {
//   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
//   .then((response) => response.json())
//   .then((data) => this.setState({individualMovieVideo: data, movies:null}))
// }

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
    if(Object.keys(this.state.individualMovie).length === 0) {
      return (
        <div>
          {/* <header>
            <img className="headerImage"src={banana} alt="logo of a banana waving"/>
            <h1 className="headerOne">OVERRIPE</h1>
            <h1 className="headerTwo">BANANAS</h1>
          </header> */}
          {this.state.error && <p className="error-header">{this.state.error}</p>}
          <section className="main-page">
            <Route path='/' render={ () => (
            <>
            <Header error={this.state.error} individualMovie = {this.state.individualMovie}/>
            <Form /> 
            <Movies movies={this.state.movies} getMovieInfo = {this.getMovieInfo}/>
            </>
            )} />
            {/* <Form />
            <Movies movies={this.state.movies} getMovieInfo = {this.getMovieInfo}/> */}
          </section>
        </div>
      );
    } else {

      return (
        <div>
          <header>
            <Link to={'/movies'}>
            <button className="home-button" onClick={this.displayHome}>
              BACK HOME
            </button>
            </ Link>
            <img
              className="headerImage"
              src={banana}
              alt="logo of a banana waving"
            />
            <h1 className="headerOne">OVERRIPE</h1>
            <h1 className="headerTwo">BANANAS</h1>
          </header>
          {this.state.error && (
            <p className="error-header">{this.state.error}</p>
          )}
          <Route 
          exact path='/movies/:id'
          render={ ( {match} ) => {
            const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
            return  <MovieDetails individualMovie={this.state.individualMovie} />
          }}
          />
        </div>
      );
    }
  }
}

export default App;
