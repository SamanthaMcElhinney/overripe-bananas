import React, { Component } from "react"
import Form from "./Form"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
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
    </div>
    // <Movies />

    )
  }
}

export default App;
