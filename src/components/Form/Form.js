import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      movieTitle: ''
    }
  }
  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value})
  // }

  handleChange = event => {
    const movieTitle = event.target.value;
    this.setState({ movieTitle });
    this.props.searchMovies(movieTitle);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          id="movieTitle"
          placeholder="Search Favorite Movie"
          className="search"
          role="search"
          name="movieTitle"
          value={this.state.movieTitle}
          onChange={(event) => this.handleChange(event)}
        />
      </form>
    );
  }
}


export default Form