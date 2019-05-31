import React, { Component } from "react";
import MyCarousel from "./MyCarousel";
import Cards from "./Cards";
import Footer from "./Footer";
export default class Home extends Component {
  render() {
    return (
      <div>
        <MyCarousel />
        <Cards />
        <Footer />
      </div>
    );
  }
}
