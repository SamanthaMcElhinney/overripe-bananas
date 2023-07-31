import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { Link } from "react-router-dom";
import banana from "../../assets/banana.png";

function Header({ individualMovie, clearIndividualMovie }) {
  return (
    <header>
      {Object.keys(individualMovie).length === 1 && (
        <Link
          to={"/"}
          onClick={clearIndividualMovie}
          className="home-button"
        ></Link>
      )}

      <Link to="/" className="logo-container">
        <img
          className="headerImage"
          src={banana}
          alt="logo of a banana waving"
        />
        <h1 className="headerOne">OVERRIPE BANANAS</h1>
      </Link>
    </header>
  );
}

export default Header;

Header.propTypes = {
  individualMovie: PropTypes.object.isRequired,
};
