import React, { Component } from "react"
import Form from "./Form"
import Movies from './Movies'
import './App.css';
import getMovieData from "./apiCalls";

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
        <p>🍌</p>
        <h2 className='headerOne'>OVERRIPE</h2>
        <h2 className='headerTwo'>BANANAS</h2>
        <p>🍌</p>
      </header>
      <Form />
      <Movies movies={this.state.movies}/>
    </div>
    

    )
  }
}

export default App;
