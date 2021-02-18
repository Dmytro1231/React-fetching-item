import React, { useState } from "react";
import PropTypes from "prop-types";

import "./StylesPeople.css";
import AddComponent from "./AddComment";

function People({ name, birth_year }) {
  return (
    <div className="people">
      <img src="./LukeSkywalker.jpg" alt={name} />
      <div className="people__column">
        <h2>Name: {name}</h2>
        <h5>Birth year: {birth_year}</h5>
        <AddComponent />
      </div>
    </div>
  );
}

People.propTypes = {
  name: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
};

export default People;
