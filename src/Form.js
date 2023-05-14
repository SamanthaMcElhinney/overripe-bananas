import React, { Component } from 'react'
import './Form.css'
import click from "./click.png"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      movieTitle: ''
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search Favorite Movie"
          className='search'
          role="search"
          name="movieTitle"
          value={this.state.movieTitle}
          onChange={(event) => this.handleChange(event)}
        />
        <button
          className="search-button"
          value="search-button"
          id="search-button"
          type="submit"
          aria-label="Search"
        >
          <img className="click-img"src={click} alt="buttonpg" border="0"/>
        </button>
      </form>
    );
  }
}


export default Form