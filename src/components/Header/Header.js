import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import { Link } from 'react-router-dom'
import banana from "../../assets/banana.png"

function Header({individualMovie}) {
  return (
      <header>
        {Object.keys(individualMovie).length === 1 &&<Link to={'/movies'}><button className="home-button">Return Home</button></ Link>}
        <img className="headerImage"src={banana} alt="logo of a banana waving"/>
        <h1 className="headerOne">OVERRIPE</h1>
        <h1 className="headerTwo">BANANAS</h1>
      </header>
      // {error && <p className="error-header">{error}</p>}
      // <section className="main-page">
      // </section>
    );
}



export default Header

Header.propTypes = {
  individualMovie:PropTypes.object.isRequired
}