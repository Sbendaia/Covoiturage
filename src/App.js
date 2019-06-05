import React, { Component } from "react";
import Navbar from "./components/home/Navbar.js";
import "./App.css";
import SignIn from "./components/authentification/SignIn";
import SignUp from "./components/authentification/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import form from "./components/posting/postingForm";
import AllPost from "./components/posts/AllPost";
import Mesposts from "./components/user/Mesposts";
import Footer from "./components/home/Footer";
import Search from "./components/home/Search";
import Home from "./components/home/Home";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/mesAnnonces" component={Mesposts} />
            <Route path="/form" component={form} />
            <Route strict exact path="/search" component={Search} />
            <Route path="/signup" component={SignUp} />

            <Route path="/allpost" component={AllPost} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
