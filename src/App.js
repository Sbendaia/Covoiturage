import React, { Component } from "react";
import Navbar from "./components/home/Navbar.js";
import "./App.css";
import SignIn from "./components/authentification/SignIn";
import SignUp from "./components/authentification/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import form from "./components/posting/postingForm";
// import MyCarousel from "./components/MyCarousel.js";
// import Cards from "./components/Cards";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            {/* <Route exact path="/" component={Navbar} /> */}

            <Route path="/signin" component={SignIn} />
            <Route path="/form" component={form} />

            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
