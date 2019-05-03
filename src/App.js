import React, { Component } from "react";
import Navbar from "./Navbar.js";
import "./App.css";

import MyCarousel from "./MyCarousel.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MyCarousel />
      </div>
    );
  }
}

export default App;
