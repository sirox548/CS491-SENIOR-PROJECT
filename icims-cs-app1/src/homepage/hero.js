import React, { Component } from "react";
import hero from "../layouts/images/hero.jpeg";
import SearchBar from "../layouts/searchbar";

const heroStyle = {
  margin: "0",
  padding: "0",
  backgroundImage: `url(${hero})`,
  height: "650px",
  backgroundSize: "cover",
  backgroundPosition: "50% 25%",
  textAlign: "center"
};

const h1 = {
  margin: "2em auto",
  width: "70%",
  textAlign: "center"
};

export class Hero extends Component {
  render() {
    return (
      <div style={heroStyle}>
        <div class="overlay">
          <SearchBar />
          <h1 style={h1}>
            Non officia laborum ut ullamco non nulla nostrud aute dolor labore
            tempor repre henderit qui dolore.
          </h1>
        </div>
      </div>
    );
  }
}

export default Hero;
