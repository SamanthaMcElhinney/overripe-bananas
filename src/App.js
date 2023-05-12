import React, { Component } from "react"
import Form from "./Form"
import Movies from './Movies'
import './App.css';
import getMovieData from "./apiCalls";
import banana from "./banana.png"

console.log(banana)
class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((response) => response.json())
    .then((data) => this.setState({movies: data.movies}))
  }

  render() {
    return (
      <div>
        <header>
          <img className="headerImage"src={banana} alt="logo of a banana waving"/>
          <h1 className="headerOne">OVERRIPE</h1>
          <h1 className="headerTwo">BANANAS</h1>
        </header>
        <section className="main-page">
          <Form />
          <Movies movies={this.state.movies} />
        </section>
      </div>
    );
  }
}

export default App;
