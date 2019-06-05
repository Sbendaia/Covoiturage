import React, { Component } from "react";
import MyCarousel from "./MyCarousel";
import Cards from "./Cards";
import HowItWorks from "./HowItWorks";
export default class Home extends Component {
  render() {
    return (
      <div>
        <MyCarousel />
        <h1 style={{ color: "grey", textAlign: "center" }}>Commencer </h1>
        <Cards />
        <h1 style={{ color: "grey", textAlign: "center" }}>
          Comment ça marche{" "}
        </h1>
        <HowItWorks />
      </div>
    );
  }
}
