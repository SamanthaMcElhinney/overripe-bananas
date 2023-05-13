import React, { Component } from "react"
import Form from "./Form"
import Movies from './Movies'
import './App.css';
import getMovieData from "./apiCalls";
import banana from "./banana.png"
import MovieDetails from "./MovieDetails";


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      individualMovie: null,
      // individualMovieVideo: null
    }
  }

  getMovieInfo = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then((response) => response.json())
    .then((data) => this.setState({individualMovie: data, movies:null}))
  }
  //we need to pull data for an individual movie based on the id of the movie clicked to display to the page and hide all the other information.


// getMovieTrailer = (id) => {
//   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
//   .then((response) => response.json())
//   .then((data) => this.setState({individualMovieVideo: data, movies:null}))
// }



  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((response) => response.json())
    .then((data) => this.setState({movies: data.movies}))
  }

  render() {
    if(!this.state.individualMovie) {
      return (
        <div>
          <header>
            <img className="headerImage"src={banana} alt="logo of a banana waving"/>
            <h1 className="headerOne">OVERRIPE</h1>
            <h1 className="headerTwo">BANANAS</h1>
          </header>
          <section className="main-page">
            <Form />
            <Movies movies={this.state.movies} getMovieInfo = {this.getMovieInfo}/>
          </section>
        </div>
      );
    }else {

            return (
              <div>
                <header>
                  <button className="home-button">BACK HOME</button>
                  <img
                    className="headerImage"
                    src={banana}
                    alt="logo of a banana waving"
                  />
                  <h1 className="headerOne">OVERRIPE</h1>
                  <h1 className="headerTwo">BANANAS</h1>
                </header>
                <MovieDetails individualMovie={this.state.individualMovie}/>
              </div>
            );
    }
  }
}

export default App;
