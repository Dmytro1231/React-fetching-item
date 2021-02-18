import PropTypes from "prop-types";
import axios from "axios";
import People from "./components/People";
import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    peoples: [],
  };

  getPeople = async () => {
    const {
      data: { results },
    } = await axios.get("https://swapi.dev/api/people/");
    this.setState({ peoples: results });
  };

  componentDidMount() {
    this.getPeople();
  }

  render() {
    const { peoples } = this.state;
    return (
      <section className="container">
        <div className="peoples">
          {peoples.map((people, index) => (
            <People
              key={index}
              name={people.name}
              birth_year={people.birth_year}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
