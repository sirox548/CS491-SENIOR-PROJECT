import React, { Component } from "react";
import "./App.css";
//import Body, { Body3, Body2 } from "./components/Body";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";

class App extends Component {
  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <Header1 />
        <Header />
        <Header2 />
      </div>
    );
  }
}

export default App;
