import React, { Component } from "react";
import { Carousel } from "antd";
import "./MyCarousel.css";
// import travel from "./travels.jpg";
// import meet from "./meets.png";
// import roads from "./road.jpg";

export default class MyCarousel extends Component {
  render() {
    let road3 = "road3.jpg";
    return (
      <div>
        <Carousel autoplay>
          <div>
            <h1>Find a ride</h1>
          </div>
          <div>
            <h1>Meet New People</h1>
          </div>
          <div>
            <h1>Protect The Environment</h1>
          </div>
        </Carousel>
      </div>
    );
  }
}
