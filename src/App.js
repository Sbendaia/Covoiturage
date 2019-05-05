import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyCarousel from "./components/MyCarousel.js";
import Cards from "./components/Cards";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Switch>
            {/* <Route exact path="/" component={MyCarousel} /> */}
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
