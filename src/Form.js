import React, { Component } from 'react'
import './Form.css'

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
          type='text'
          placeholder='Search Favorite Movie'
          name='movieTitle'
          value={this.state.movieTitle}
          onChange={event => this.handleChange(event)}
        />
       <button className='search-button'>Find Movie</button>
      </form>
    )
  }
}


export default Form